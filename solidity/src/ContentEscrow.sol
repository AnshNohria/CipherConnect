// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

// imports
import {ISP} from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {Attestation} from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import {DataLocation} from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";
import {ISPHook} from "@ethsign/sign-protocol-evm/src/interfaces/ISPHook.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// errors
error UnauthorizedAccess();
error InsufficientDeposit();
error EscrowAlreadyReleased();
error NoFundsAvailable();
error TransferFailed();
error InvalidTransformationKey();

// interfaces, libraries, contracts
contract ContentEscrow is ISPHook {
    // Type declarations
    struct Escrow {
        address contentCreator;
        address subscriber;
        uint256 amount;
        uint64 validUntil;
        bool isReleased;
        uint256 documentId;
        uint64 attestationId;
    }

    struct EscrowData {
        uint256 escrowId;
        address contentCreator;
        address subscriber;
        uint256 documentId;
        uint64 validUntil;
        bytes transformationKey;
    }

    // State variables
    ISP public immutable signProtocolInstance;
    uint64 public schemaIdentifier;
    address public immutable admin;
    mapping(uint256 => Escrow) public escrows;
    uint256 public nextEscrowId;

    // Events
    event EscrowDeposited(
        uint256 indexed escrowId,
        address indexed contentCreator,
        address indexed subscriber,
        uint256 amount,
        uint256 documentId
    );

    event EscrowReleased(
        uint256 indexed escrowId,
        address indexed contentCreator,
        address indexed subscriber,
        uint64 attestationId,
        uint256 timestamp,
        uint256 validityUntil
    );

    event EscrowRevoked(uint256 indexed attestationId);
    event AttestationReceived(EscrowData data);
    event LogSender(address indexed sender);

    // Constructor
    constructor(address _signProtocolInstance) {
        admin = msg.sender;
        signProtocolInstance = ISP(_signProtocolInstance);
        schemaIdentifier = 0x46;
    }

    // Modifiers
    modifier onlyAdmin() {
        if (msg.sender != admin) revert UnauthorizedAccess();
        _;
    }

    // External functions
    function setSchemaIdentifier(uint64 _schemaIdentifier) external onlyAdmin {
        schemaIdentifier = _schemaIdentifier;
    }

    function depositEscrow(
        address _contentCreator,
        uint256 _documentId,
        uint64 _validUntil
    ) external payable {
        if (msg.value == 0) revert InsufficientDeposit();
        if (_validUntil <= block.timestamp) revert InvalidTransformationKey();

        escrows[nextEscrowId] = Escrow({
            contentCreator: _contentCreator,
            subscriber: msg.sender,
            amount: msg.value,
            validUntil: _validUntil,
            isReleased: false,
            documentId: _documentId,
            attestationId: 0
        });

        emit EscrowDeposited(
            nextEscrowId,
            _contentCreator,
            msg.sender,
            msg.value,
            _documentId
        );
        nextEscrowId++;
    }

    function releaseEscrow(
        uint256 _escrowId,
        bytes memory _transformationKey
    ) external {
        Escrow storage escrow = escrows[_escrowId];
        address sender = msg.sender;
        emit LogSender(sender);

        if (sender != escrow.contentCreator) revert UnauthorizedAccess();
        if (escrow.isReleased) revert EscrowAlreadyReleased();
        if (escrow.amount == 0) revert NoFundsAvailable();
        if (_transformationKey.length != 96) revert InvalidTransformationKey();

        EscrowData memory escrowData = EscrowData({
            escrowId: _escrowId,
            contentCreator: escrow.contentCreator,
            subscriber: escrow.subscriber,
            documentId: escrow.documentId,
            validUntil: escrow.validUntil,
            transformationKey: _transformationKey
        });

        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(escrow.subscriber);
        bytes memory data = abi.encode(escrowData);
        Attestation memory attestation = Attestation({
            schemaId: schemaIdentifier,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: escrow.validUntil,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: data
        });

        signProtocolInstance.attest(attestation, "", "", data);
    }

    // Internal functions
    // ...existing code...

    // Private functions
    // ...existing code...

    // View/Pure functions
    function getEscrowDetails(
        uint256 _escrowId
    )
        external
        view
        returns (
            address contentCreator,
            address subscriber,
            uint256 amount,
            bool isReleased,
            uint256 documentId,
            uint64 attestationId
        )
    {
        Escrow storage escrow = escrows[_escrowId];
        return (
            escrow.contentCreator,
            escrow.subscriber,
            escrow.amount,
            escrow.isReleased,
            escrow.documentId,
            escrow.attestationId
        );
    }

    // Override functions
    function didReceiveAttestation(
        address _attester,
        uint64, // schemaId
        uint64 _attestationId,
        bytes calldata _extraData
    ) external payable override {
        emit AttestationReceived(abi.decode(_extraData, (EscrowData)));

        EscrowData memory escrowData = abi.decode(_extraData, (EscrowData));
        uint256 escrowId = escrowData.escrowId;
        Escrow storage escrow = escrows[escrowId];

        if (escrow.isReleased) revert EscrowAlreadyReleased();
        if (escrow.amount == 0) revert NoFundsAvailable();

        (bool success, ) = payable(escrowData.contentCreator).call{
            value: escrow.amount
        }("");
        if (!success) revert TransferFailed();

        escrow.isReleased = true;
        escrow.attestationId = _attestationId;

        emit EscrowReleased(
            escrowId,
            escrow.contentCreator,
            escrow.subscriber,
            _attestationId,
            block.timestamp,
            escrow.validUntil
        );
    }

    function didReceiveAttestation(
        address, // attester
        uint64, // schemaId
        uint64, // attestationId
        IERC20, // resolverFeeERC20Token
        uint256, // resolverFeeERC20Amount
        bytes calldata // extraData
    ) external override {
        // ERC20 payments not supported
    }

    function didReceiveRevocation(
        address, // attester
        uint64, // schemaId
        uint64 _attestationId,
        bytes calldata // extraData
    ) external payable override {
        emit EscrowRevoked(_attestationId);
    }

    function didReceiveRevocation(
        address, // attester
        uint64, // schemaId
        uint64 _attestationId,
        IERC20, // resolverFeeERC20Token
        uint256, // resolverFeeERC20Amount
        bytes calldata // extraData
    ) external override {
        emit EscrowRevoked(_attestationId);
    }
}
