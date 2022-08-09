# UUPS Proxy Pattern Sample Project.

Openzeppelin is providing heavenly help to blockchain world and here is one of the proxy pattern implementation. [docs](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable)

Pizza contract which is upgradeable to PizaaV2, scripts to deploy the proxy and upgrade it are included in project.

## Terminal commands to run this file : 

```
- npx hardhat compile
- env $(cat .env) npx hardhat run --network ropsten scripts/deploy_pizza_v1.js
- env $(cat .env) npx hardhat verify --network ropsten <implementation address>
- env $(cat .env) npx hardhat run --network ropsten scripts/upgrade_pizza_v2.js
```

For detailed guide to upload contract on Ropsten testnet [guide](https://github.com/ishinu/Re-Entrancy-Hack-Upgradeable-#pre-requisites-).
