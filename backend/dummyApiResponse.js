module.exports = {
    getNativeBalance: '9999999999999999999',
    getWalletTokenBalances: [{
        "token_address": "",
        "name": "Ether Network",
        "symbol": "ETH",
        "logo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
        "thumbnail": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
        "decimals": 18,
        "balance": "1234567890000000000"
    }],
    getTokenPrice: {
        "data": {
            "nativePrice": {
                "value": "8409770570506626",
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH"
            },
            "usdPrice": "19.722370676",
            "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
            "exchangeName": "Uniswap v3"
        }
    },
    getWalletTokenTransfers: [
        {
            "transaction_hash": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
            "address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
            "block_timestamp": "2021-04-02T10:07:54.000Z",
            "block_number": 12526958,
            "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
            "to_address": "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044",
            "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
            "value": 650000000000000000
        }
    ],
    getTokenMetadata: [
        {
            "address": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
            "name": "Kylin Network",
            "symbol": "KYL",
            "decimals": "18",
            "logo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
            "logo_hash": "ee7aa2cdf100649a3521a082116258e862e6971261a39b5cd4e4354fcccbc54d",
            "thumbnail": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
            "block_number": "string",
            "validated": "string"
        }
    ],
    getWalletNFTs: {
        "status": "SYNCING",
        "total": "2000",
        "page": "2",
        "page_size": "100",
        "cursor": "string",
        "result": [
            {
                "token_address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
                "token_id": "15",
                "contract_type": "ERC721",
                "owner_of": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                "block_number": "88256",
                "block_number_minted": "88256",
                "token_uri": "string",
                "metadata": "string",
                "amount": "1",
                "name": "CryptoKitties",
                "symbol": "RARI",
                "token_hash": "502cee781b0fb40ea02508b21d319ced",
                "last_token_uri_sync": "2021-02-24T00:47:26.647Z",
                "last_metadata_sync": "2021-02-24T00:47:26.647Z"
            }
        ]
    }
}
