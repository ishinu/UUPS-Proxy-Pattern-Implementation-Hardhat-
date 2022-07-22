const { ethers, upgrades } = require("hardhat");

const SLICES = 4;
async function main() {
  const Pizza = await ethers.getContractFactory("Pizza");
  console.log("Deploying Pizza Contract...");
  const pizza = await upgrades.deployProxy(Pizza, [SLICES], {
    initializer: "initialize",
  });
  await pizza.deployed();
  console.log("Pizza deployed to : ", pizza.address);
}

main();
