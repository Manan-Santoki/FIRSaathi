require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/VtNRAOm2BemZIx_aeqhnpq1ABTDYGK3Q`,
      accounts: ['2b381fb3994dff3092131b52867c0bfc130eae7438b25ab56ef72e840b004315'],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/VtNRAOm2BemZIx_aeqhnpq1ABTDYGK3Q`,
      accounts: [`0x70db8f0037ab5157426df20f90cd9c56496e1d808f91f06bf28c07886eb5d7e0`],
    }
  },
  paths: {
    artifacts: "./frontend_app/src/artifacts",
  }
};
