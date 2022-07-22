const { ethers, upgrades } = require("hardhat");

const PROXY = "0xd1f5E05671d51d8Ce0c0Ba47176eA2b0c983772B";

async function main() {
  const PizzaV2 = await ethers.getContractFactory("PizzaV2");
  console.log("Upgrading Pizza...");
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log("Pizza upgraded successfully!");
}

main();
