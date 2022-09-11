require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.7.6",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.5.0",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.8.0",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.8.10",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
    ],
    
  },

  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/StrM8_S9RnO6MXUEmUmOxlyfL2_Kc2rO", // ONLY EDIT THIS LINE
        blockNumber: 13124590
      },
      initialBaseFeePerGas: 0,
      gasPrice: 0
    }
  }
};