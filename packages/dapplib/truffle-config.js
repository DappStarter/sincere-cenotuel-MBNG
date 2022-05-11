require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict enter occur slab chaos note mirror punch hunt photo flock subway'; 
let testAccounts = [
"0xc5d823e979435e3b0eb414c19d7b283ac2b33a19ea27b30d584beb45a193be85",
"0xdce6d92d69ff1448dc234a38d05a51133d04d50628d7949ff9417bd8e97b34bf",
"0x3f23755f3a0bf2a5b0e12838e25312de61b0f36cfca83639112dccf0c58ee5c5",
"0x7c0bf7b72cbcfb5fd5d5c24cb20b395148d9dc191dbc6b29e90e6009379b8ea1",
"0x3344c59813d9f30e31e68a62bb52d6f5b5163bb4b5830bb1f6dc4dd6dcdd0a55",
"0x0ac258dd157eebcba582c29328463489d6877ec59f96cf3ebf2270135789a40a",
"0x951b045a7be14667242363944e851a662196a6f37ee9f2aafc0ac3cee06afd98",
"0xe565ba75eb7bd3c8fd86948c23d1800a1696b5927b63e998b78f5dbc6c4fbe19",
"0x79d1651f06e698e94814432dfdb4f695c9896ff09bd0775c620a1c26f727919d",
"0xd2624948695fb7940222b42d2d3978217ff2fd9ce18cb3508d60ecb9f6147ca2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


