const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/138a070a8c734e448e46beaa2c244861'))

module.exports = web3;