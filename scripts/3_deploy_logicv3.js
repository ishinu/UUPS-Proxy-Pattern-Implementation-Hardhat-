const { ethers,upgrades } = require("hardhat");

var proxyAddress = "0x394656d04DD136137AEBdbf45ecE7d6b985A7389";

async function main(){
    console.log("Deploying LogicV3 contract...");
    const LogicV3 = await ethers.getContractFactory("LogicV3");
    const logicv3 = await upgrades.upgradeProxy(proxyAddress,LogicV3);
    await logicv3.deployed();
    console.log("LogicV3 Proxy Contract ( Must be Same ) deployed to : ",logicv3.address);
    console.log("LogicV3 Contract implementation address is : ",await upgrades.erc1967.getImplementationAddress(logicv3.address));
}

main();