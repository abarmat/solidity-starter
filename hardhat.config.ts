import * as dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from 'hardhat/types'
import { task } from 'hardhat/config'

// Plugins

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-abi-exporter'
import 'hardhat-gas-reporter'
import 'hardhat-contract-sizer'
import '@tenderly/hardhat-tenderly'
import '@openzeppelin/hardhat-upgrades'
import '@typechain/hardhat'
import 'solidity-coverage'

// Networks

interface NetworkConfig {
  network: string
  chainId: number
  gas?: number | 'auto'
  gasPrice?: number | 'auto'
}

const networkConfigs: NetworkConfig[] = [
  { network: 'goerli', chainId: 5 },
  { network: 'sepolia', chainId: 11155111 },
  { network: 'mainnet', chainId: 1 },
  { network: 'ropsten', chainId: 3 },
  { network: 'rinkeby', chainId: 4 },
  { network: 'kovan', chainId: 42 },
]

function getAccountMnemonic() {
  return process.env.MNEMONIC || ''
}

function getDefaultProviderURL(network: string) {
  return `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`
}

function setupDefaultNetworkProviders(buidlerConfig) {
  for (const netConfig of networkConfigs) {
    buidlerConfig.networks[netConfig.network] = {
      chainId: netConfig.chainId,
      url: getDefaultProviderURL(netConfig.network),
      gas: netConfig.gasPrice || 'auto',
      gasPrice: netConfig.gasPrice || 'auto',
      accounts: {
        mnemonic: getAccountMnemonic(),
      },
    }
  }
}

// Tasks

task('accounts', 'Prints the list of accounts', async (taskArgs, bre) => {
  const accounts = await bre.ethers.getSigners()
  for (const account of accounts) {
    console.log(await account.getAddress())
  }
})

// Config

const config: HardhatUserConfig = {
  paths: {
    sources: './contracts',
    tests: './test',
    artifacts: './build/contracts',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            '*': {
              '*': ['storageLayout'],
            },
          },
        },
      },
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
      loggingEnabled: false,
      gas: 12000000,
      gasPrice: 'auto',
      blockGasLimit: 12000000,
      accounts: {
        mnemonic: 'myth like bonus scare over problem client lizard pioneer submit female collect',
      },
    },
    ganache: {
      chainId: 1337,
      url: 'http://localhost:8545',
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    showTimeSpent: true,
    currency: 'USD',
    outputFile: 'reports/gas-report.log',
  },
  typechain: {
    outDir: 'build/types',
    target: 'ethers-v5',
  },
  abiExporter: {
    path: './build/abis',
    clear: false,
    flat: true,
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT,
    username: process.env.TENDERLY_USERNAME,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: true,
  },
}

setupDefaultNetworkProviders(config)

export default config
