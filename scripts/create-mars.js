// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Mars = await ethers.getContractFactory("Mars");
  const mars = await upgrades.deployProxy(Mars);
  await mars.deployed();
  console.log("mars deployed to:", mars.address);
}

main();