// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

// imports
import {ISP} from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {ISPHook} from "@ethsign/sign-protocol-evm/src/interfaces/ISPHook.sol";
import {DataLocation} from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";
import {Schema} from "@ethsign/sign-protocol-evm/src/models/Schema.sol";

// errors
error NotSchemaOwner();

// interfaces, libraries, contracts
contract SchemaCreator {
    // State variables
    ISP public immutable signProtocol;
    address public schemaOwner;
    uint64 public schemaId;
    address public hookAddress;

    // Events
    event SchemaCreated(uint64 indexed schemaId, address indexed hookAddress);

    // Constructor
    constructor(
        address _signProtocolInstance,
        address _hookInstance,
        string memory _schemaData
    ) {
        schemaOwner = msg.sender;
        signProtocol = ISP(_signProtocolInstance);

        // Initialize the schema
        Schema memory newSchema = Schema({
            registrant: msg.sender,
            revocable: false,
            dataLocation: DataLocation.ONCHAIN,
            maxValidFor: 0,
            hook: ISPHook(_hookInstance),
            timestamp: uint64(block.timestamp),
            data: _schemaData
        });

        // Additional initialization if necessary
    }

    // External functions
    function createSchemaWithHook(
        bool _isRevocable,
        DataLocation _dataLocation,
        uint64 _maxValidityPeriod,
        address _newHookAddress,
        string memory _schemaData
    ) external {
        if (msg.sender != schemaOwner) revert NotSchemaOwner();

        // Define the new schema
        Schema memory newSchema = Schema({
            registrant: msg.sender,
            revocable: _isRevocable,
            dataLocation: _dataLocation,
            maxValidFor: _maxValidityPeriod,
            hook: ISPHook(_newHookAddress),
            timestamp: uint64(block.timestamp),
            data: _schemaData
        });

        // Create the schema on the Sign Protocol and retrieve the schema ID
        schemaId = signProtocol.createSchema(newSchema);

        // Update the hook address
        hookAddress = _newHookAddress;

        // Emit the schema creation event
        emit SchemaCreated(schemaId, _newHookAddress);
    }

    // Optional: Function to update the hook address
    function updateHookAddress(uint64 _existingSchemaId, address _updatedHookAddress) external {
        if (msg.sender != schemaOwner) revert NotSchemaOwner();

        // Update the hook in the Sign Protocol
        signProtocol.registerHook(_existingSchemaId, _updatedHookAddress);

        // Update the stored hook address
        hookAddress = _updatedHookAddress;
    }
}
