// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MarsV2 = await ethers.getContractFactory("MarsV2");
  const mars = await upgrades.upgradeProxy(BOX_ADDRESS, MarsV2);
  
  console.log("Mars upgraded transaction: ", mars.deployTransaction().hash);
}

main();