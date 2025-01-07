// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25

// imports
import {Script, console} from "forge-std/Script.sol";
import {ContentEscrow} from "../src/ContentEscrow.sol";

contract DeployContentEscrow is Script {
    ContentEscrow public contentEscrowInstance;

    // Modifier for deployment
    function setUp() public {
        // Setup deployment configuration if needed
    }

    // Function to deploy the ContentEscrow contract
    function run() public {
        vm.startBroadcast();

        // Retrieve Sign Protocol address from environment variables
        address signProtocolAddress = vm.envAddress("SIGN_PROTOCOL_ADDRESS");
        contentEscrowInstance = new ContentEscrow(signProtocolAddress);

        console.log("ContentEscrow deployed at:", address(contentEscrowInstance));

        vm.stopBroadcast();
    }
}
