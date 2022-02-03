require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain uncover heavy private flat speak'; 
let testAccounts = [
"0xe29870e3a740e3edf5263a39b8a338da6e9dcfa85d3791dd758c4b6652fd83ba",
"0xeed6034006bc5756f6e4ff15011f095d60f33370bf03df78cb043811e99d41b7",
"0x01b57f7a4bf763b12c566b84c95f8d2997de7dd84cec7ce2534a09896d94d594",
"0x6fd5e6c190bbc41c8bd7d70b8ca45110e5a0dea09d24267e2f080c9743e202bb",
"0x0623bc257f6af4020bdfae2cdb8f3617ae3b38e8c79e7a109be8e3bfe143836c",
"0x3eec9c9f5bd14bd1326ab63e8012dc06c70b05bdf4af4aaa5b4000a7800cf920",
"0xb84092d3d41547424cba048dbd288b2e2d5a51474fa2c70a1cab7854092cd098",
"0xca63ed27a9f3edd129719bd69f1965d2f22d7042ebae20228dc2be684be09c43",
"0x579902b5030a6ad9696cfff7a30400f681592cb521f804236951ba3fb097fc84",
"0xf87d156c9b356f07a1817c00a7af06891493f6664d09ffae5e47b91b2b3beead"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


