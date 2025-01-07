// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

// imports
import {ISP} from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {Attestation} from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import {DataLocation} from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TestContract {
    constructor(address _signProtocolInstance, uint64 _schemaId, bytes memory _data) {
        ISP signProtocol = ISP(_signProtocolInstance);

        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(msg.sender);
        Attestation memory attestation = Attestation({
            schemaId: _schemaId,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: msg.sender,
            validUntil: 0,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: _data
        });

        signProtocol.attest(attestation, "", "", "");
    }
}
