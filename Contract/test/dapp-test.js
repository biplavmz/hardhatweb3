const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dapp", function () {
    it("Should return the new ", async function () {
      const Dapp = await ethers.getContractFactory("Dapp");
      const dapp = await Dapp.deploy("HBD!");
      await dapp.deployed();
  
      expect(await dapp.getName()).to.equal("HBD!");
  
      const setGreetingTx = await dapp.setName("Biplav");
  
      // wait until the transaction is mined
      await setGreetingTx.wait();
  
      expect(await dapp.getName()).to.equal("Biplav"); 
    });
  });
  