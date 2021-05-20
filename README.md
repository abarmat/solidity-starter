# Ethereum Solidity Starter

This is a skeleton repository to work as a foundation for a smart contracts project using Solidity.

## Quickstart

1. Clone the repo
2. Run `yarn install`

## What’s Included?

- **[Hardhat](https://hardhat.org/)**: Ethereum development environment for professionals.
- **[Waffle](https://getwaffle.io/)**: The most advanced framework for testing smart contracts
- **[Typechain](https://github.com/ethereum-ts/TypeChain)**: TypeScript bindings for Ethereum smart contracts
- **[Tenderly](https://tenderly.co/)**: Real-time monitoring, alerting, and troubleshooting for Smart Contracts.
- **[Ethers]()**: A complete Ethereum wallet implementation and utilities in JavaScript (and TypeScript).
- **[Etherscan](https://etherscan.io)**: Verify contracts in The Ethereum Blockchain Explorer

#### Hardhat Plugins
- ABI Exporter
- Gas Reporter
- Contract Sizer
- OpenZeppelin Upgrades
## Usage

Look at the `package.json` inside scripts section to see available commands. A number of helper build scripts are located in `/scripts`.
### Build contracts

Compiles contracts and creates Typechain bindings.

`yarn build`

### Run tests

Runs all tests in the `/test` folder.

`yarn test`

### Run tests with gas report

Run all tests calculating gas estimations.

`yarn test:gas`

The gas report will be saved on the `/reports` folder.

### Deploy to Ethereum

Create/modify network config in hardhat.config.ts and add API key and private key, then run:

`npx hardhat run --network rinkeby scripts/deploy.ts`

### Verify on Etherscan

Using the hardhat-etherscan plugin, add Etherscan API key to hardhat.config.ts, then run:

`npx hardhat verify --network rinkeby <DEPLOYED ADDRESS>`
