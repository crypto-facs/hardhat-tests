import type { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";

const DEFAULT_MNEMNOIC = "";


const mnemonic_24 = process.env['MNEMONIC'] || DEFAULT_MNEMNOIC;

if (!process.env['MNEMONIC']) {
  console.log('Warning: ENV_VAR MNEMONIC is not set! Using the default mnemonic!!');
}

if (mnemonic_24.split(' ').length !== 24) {
  console.error('Error: ENV_VAR MNEMONIC must be 24-word');
  process.exit(-1);
}

console.log(`Using this MNEMONIC: ${mnemonic_24}`);

const config: HardhatUserConfig = {
  solidity: "0.8.2",
  defaultNetwork: 'ethermint',
  networks: {
    hardhat: {

    },
    ethermint: {
      url: "http://localhost:8545/",
      accounts: {
        mnemonic: mnemonic_24
      },
    },
    rinkeby: {
      url: "https://rinkebyme.fran.co",
      accounts: ["0x9bbcfe84b66b0ca78311bdf444703ac6c201e4b05c1ecd1aae1934a371b0f2cb"]
    },
    remote: {
      url: "https://cronos-testnet-3.crypto.org:8545/",
      accounts: {
        mnemonic: mnemonic_24
      },
    }
  },
  mocha: {
    timeout: 1000000
  }
}

export default config;