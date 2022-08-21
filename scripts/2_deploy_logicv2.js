const { ethers,upgrades } = require("hardhat");

var proxyAddress = "0x394656d04DD136137AEBdbf45ecE7d6b985A7389";

async function main(){
    console.log("Deploying LogicV2 contract...");
    const LogicV2 = await ethers.getContractFactory("LogicV2");
    const logicv2 = await upgrades.upgradeProxy(proxyAddress,LogicV2);
    await logicv2.deployed();
    console.log("LogicV2 Proxy Contract ( Must be Same ) deployed to : ",logicv2.address);
    console.log("LogicV2 Contract implementation address is : ",await upgrades.erc1967.getImplementationAddress(logicv2.address));
}

main();