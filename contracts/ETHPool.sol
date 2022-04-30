// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "hardhat/console.sol";

contract Counter {

    //global variables

    //structs
        //Deposit
            //amountStaked
            //timeStaked

        //staking
            //user
            //amount
            //time

    //mappings
        //user (address) -> deposits (Deposit[]) 

    //events
        //deposit (user (address), amount (uint256), timestamp (uint256))
        //withdrawal

    //constructor
        //set Team address

    //modifier: onlyTeam

    //functions
        //deposit stake
        //deposit reward
        //distribute rewards

    uint256 count = 0;

    event CountedTo(uint256 number);

    function getCount() public view returns (uint256) {
        return count;
    }

    function countUp() public returns (uint256) {
        console.log("countUp: count =", count);
        uint256 newCount = count + 1;
        require(newCount > count, "Uint256 overflow");
        count = newCount;
        emit CountedTo(count);
        return count;
    }

    function countDown() public returns (uint256) {
        console.log("countDown: count =", count);
        uint256 newCount = count - 1;
        require(newCount < count, "Uint256 underflow");
        count = newCount;
        emit CountedTo(count);
        return count;
    }
}
