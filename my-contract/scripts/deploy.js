// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  // get the contract
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(50);

  // print the address of the deployed contract
  console.log("WhiteList Contract Address:", deployedWhitelistContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });