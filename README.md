# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

** Terminal commands to run this file : **

1. npx hardhat compile
2. env $(cat .env) npx hardhat run --network ropsten scripts/deploy_box_v1.js
3. env $(cat .env) npx hardhat verify --network ropsten [Replace with proxy address and remove square brackets...]
4. env $(cat .env) npx hardhat run --network ropsten scripts/upgrade_box_v2.js

~ Happy upgrading ~
