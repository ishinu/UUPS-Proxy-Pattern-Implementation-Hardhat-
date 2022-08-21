# UUPS Proxy Pattern Implementation

It allows us to upgrade previously deployed contracts for timely updates. Comparetively cheaper than TransparentUpgradeable Proxy pattern.

In simple words, it works as follows :

- `upgradeProxy()` is applied to deploy `ERC1967 Proxy` which delegates all calls to the implementation as well the functionality to upgrade to a newer implementation.
- Unlike `TransparentUpgradeable Proxy` It doesn't have `ProxyAdmin` for upgrade functionality due to which it's cheaper for deployments.

For detailed difference between proxy patterns, feel free to check out [this](https://github.com/ishinu/Beacon-Proxy-Upgrade-Example-Hardhat-) repository `README` file.
