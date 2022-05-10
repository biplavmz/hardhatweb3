//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";     //to check with the console.log

//solidity is a type language where javascipt is 

contract Dapp {

    struct User{
        address wallet;
        string name;
        string username;
        string bio;
        string avatar;
    }

    mapping(address => string) public users;
    mapping(string => User) public users;


    function signup(string memory _name,string memory _username,string memory _bio,)
   

}
