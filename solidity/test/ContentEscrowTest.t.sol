// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

// imports
import "forge-std/Test.sol";
import "../src/ContentEscrow.sol"; // Import the contract

contract ContentEscrowTest is Test {
    ContentEscrow public escrowContract;
    address contentCreator = address(1); // Mock content creator
    address subscriber = address(2); // Mock subscriber
    address mockSP = address(3); // Mock Sign Protocol instance

    function setUp() public {
        vm.prank(contentCreator); // Simulate contract creation by the content creator
        escrowContract = new ContentEscrow(mockSP);
    }

    // Test require condition for depositEscrow: "Must deposit some funds"
    function testDepositRequiresNonZeroFunds() public {
        vm.prank(subscriber);
        vm.expectRevert(ContentEscrow.InsufficientDeposit.selector);
        escrowContract.depositEscrow{value: 0}(contentCreator, 12345, 1693939513);
    }

    // Test require condition for releaseEscrow: "Only content creator can release funds"
    function testReleaseEscrowOnlyByContentCreator() public {
        // Simulate a valid deposit from the subscriber
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);

        // Attempt to release escrow as the subscriber (not the content creator)
        vm.prank(subscriber);
        vm.expectRevert(ContentEscrow.UnauthorizedAccess.selector);
        escrowContract.releaseEscrow(0, new bytes(96)); // Corrected byte length
    }

    // Test require condition for releaseEscrow: "Funds already released"
    function testReleaseEscrowAlreadyReleased() public {
        // Simulate a valid deposit from the subscriber
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);

        // Release escrow for the first time as content creator
        vm.prank(contentCreator);
        escrowContract.releaseEscrow(0, new bytes(96));

        // Attempt to release the same escrow again
        vm.prank(contentCreator);
        vm.expectRevert(ContentEscrow.EscrowAlreadyReleased.selector);
        escrowContract.releaseEscrow(0, new bytes(96));
    }

    // Test require condition for releaseEscrow: "No funds available for this escrow"
    function testReleaseEscrowNoFunds() public {
        // Attempt to release an escrow that doesn't exist or has zero funds
        vm.prank(contentCreator);
        vm.expectRevert(ContentEscrow.NoFundsAvailable.selector);
        escrowContract.releaseEscrow(0, new bytes(96));
    }

    // Test successful deposit
    function testDepositEscrowSuccessfully() public {
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);

        // Perform the deposit with 1 ETH and document ID 12345
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);

        // Check contract balance is now 1 ETH
        assertEq(address(escrowContract).balance, 1 ether);

        // Retrieve the escrow details
        (
            address retrievedSubscriber,
            uint256 amount,
            bool isReleased,
            uint256 documentId,
            uint64 attestationId
        ) = escrowContract.getEscrowDetails(0);

        // Assert that the values are correct
        assertEq(retrievedSubscriber, subscriber);
        assertEq(amount, 1 ether);
        assertFalse(isReleased);
        assertEq(documentId, 12345);
        assertEq(attestationId, 0);
    }

    // Test successful release
    function testReleaseEscrowSuccessfully() public {
        // Set up the test by depositing funds into escrow
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);
        escrowContract.depositEscrow{value: 1 ether}(
            contentCreator,
            12345,
            uint64(block.timestamp + 30 days)
        );

        // Check initial balance of the content creator
        uint256 initialCreatorBalance = contentCreator.balance;

        // Prepare a valid 96-byte transformation key
        bytes memory transformationKey = new bytes(96);

        // Call the releaseEscrow function as the content creator
        vm.prank(contentCreator);
        escrowContract.releaseEscrow(0, transformationKey);

        // Check if the funds were transferred to the content creator
        assertEq(contentCreator.balance, initialCreatorBalance + 1 ether);

        // Retrieve the escrow details to verify release
        (
            ,
            uint256 amount,
            bool isReleased,
            uint256 documentId,
            uint64 attestationId
        ) = escrowContract.getEscrowDetails(0);

        // Assert escrow was correctly released
        assertTrue(isReleased);
        assertEq(amount, 1 ether);
        assertEq(documentId, 12345);
        assertTrue(attestationId > 0); // Check that an attestation ID was created
    }

    // Test deposit event
    function testEscrowDepositedEvent() public {
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);

        // Expect the EscrowDeposited event to be emitted
        vm.expectEmit(true, true, true, true);
        emit EscrowDeposited(0, contentCreator, subscriber, 1 ether, 12345);

        // Perform the deposit, which should trigger the EscrowDeposited event
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);
    }

    // Test release event
    function testEscrowReleasedEvent() public {
        // Simulate a deposit from the subscriber
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);

        // Prepare a valid 96-byte transformation key
        bytes memory transformationKey = new bytes(96);

        // Expect the EscrowReleased event to be emitted with correct parameters
        vm.expectEmit(true, true, true, true);
        emit EscrowReleased(
            0,
            contentCreator,
            subscriber,
            0, // Assuming attestationId starts at 0 for the test
            block.timestamp,
            1693939513
        );

        // Release the escrow, which should trigger the EscrowReleased event
        vm.prank(contentCreator);
        escrowContract.releaseEscrow(0, transformationKey);
    }


    // Test release escrow with invalid transformation key length
    function testReleaseEscrowInvalidKeyLength() public {
        vm.deal(subscriber, 1 ether);
        vm.prank(subscriber);
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);

        bytes memory invalidKey = new bytes(95); // Invalid length
        vm.prank(contentCreator);
        vm.expectRevert(ContentEscrow.InvalidTransformationKey.selector);
        escrowContract.releaseEscrow(0, invalidKey);
    }

    // Test multiple deposits
    function testMultipleDeposits() public {
        vm.deal(subscriber, 2 ether);
        vm.startPrank(subscriber);

        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12345, 1693939513);
        escrowContract.depositEscrow{value: 1 ether}(contentCreator, 12346, 1693939514);

        vm.stopPrank();

        assertEq(address(escrowContract).balance, 2 ether);

        (
            address subscriberAddr1,
            uint256 amount1,
            bool isReleased1,
            uint256 documentId1,
            uint64 attestationId1
        ) = escrowContract.getEscrowDetails(0);

        (
            address subscriberAddr2,
            uint256 amount2,
            bool isReleased2,
            uint256 documentId2,
            uint64 attestationId2
        ) = escrowContract.getEscrowDetails(1);

        assertEq(subscriberAddr1, subscriber);
        assertEq(amount1, 1 ether);
        assertFalse(isReleased1);
        assertEq(documentId1, 12345);

        assertEq(subscriberAddr2, subscriber);
        assertEq(amount2, 1 ether);
        assertFalse(isReleased2);
        assertEq(documentId2, 12346);
    }
}
