// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "hardhat/console.sol";

contract Counter {

    //global variables

    //amount in pool

    //dynamic arrays
        //users (address[])

    //mappings
        //userStakes: user (address) -> amountStaked (uint256)

    //events
        //deposit (user (address), amount (uint256), timestamp (uint256))
        //withdrawal (user (address), amount (uint256), timestamp(uint256))
        //reward (user(address), amount (uint256), timestamp(uint256))

    //constructor
        //set Team address

    //modifier: onlyTeam

    //functions
        //deposit stake ( payable, external)
            //require msg.value > 0
            //if userStakes[msg.sender] is 0,
                //push msg.sender to users array
            //add msg.value to userStakes[msg.sender]
            //add msg.value to total pool amount

            //event Deposit

        //deposit reward (external onlyTeam)
            //require pool amount > 0
            //for every user in pool,
                //percentage = userStakes[user] * 100 / total amount in pool
                //reward = userStakes[user] + msg.value * percentage / 100
                //add reward to user's amount staked

            //event Reward

        //withdraw stake (external)
            //require userStakes[msg.sender] > 0
            //require msg.value > 0
            //subtract msg.value from user's amount staked
            //call fallback to send ether rewards to msg.sender'

            //require transfer was successul

            //event Withdrawal

}
