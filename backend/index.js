const Moralis = require('Moralis').default
const express = require('express')
const cors = require('cors')
const { response } = require('express')
const dar = require('./dummyApiResponse')
const app = express()
const port = 8080
require('dotenv').config()

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/nativeBalance', async (req, res) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    try {
        const { address, chain } = req.query;
        const response = await Moralis.EvmApi.balance.getNativeBalance({
            address: address,
            chain: chain,
        });
        const nativeBalance = response.data

        // balanceが無いため、テスト用のbalanceを入れる
        if (nativeBalance.balance === '0') {
            nativeBalance.balance = dar.getNativeBalance
        }

        let nativeCurrency;

        if (chain === "0x1") {
            nativeCurrency = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        } else if (chain === "0x89") {
            nativeCurrency = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
        }

        const nativePrice = await Moralis.EvmApi.token.getTokenPrice({
            address: nativeCurrency,
            chain: chain
        });

        nativeBalance.usd = nativePrice.data.usdPrice;
        res.send(nativeBalance)

    } catch (e) {
        res.send(e)
    }
})

app.get('/tokenBalances', async (req, res) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    try {
        const { address, chain } = req.query;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            address: address,
            chain: chain,
        });

        let tokens = response.data === [] ? response.data : dar.getWalletTokenBalances
        console.log(tokens);
        let legitTokens = [];

        for (let i = 0; i < tokens.length; i++) {
            var priceResponse
            if (tokens[i].token_address === "") {
                priceResponse = dar.getTokenPrice
            } else {
                priceResponse = await Moralis.EvmApi.token.getTokenPrice({
                    address: tokens[i].token_address,
                    chain: chain,
                });
            }
            if (priceResponse.data.usdPrice > 0.01) {
                tokens[i].usd = priceResponse.data.usdPrice;
                legitTokens.push(tokens[i]);
            } else {
                console.log("💩 coin --------------");
                console.log(priceResponse.data);
            }
        }

        res.send(legitTokens);
    } catch (e) {
        res.send(e);
    }
});


app.get('/tokenTransfers', async (req, res) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    try {
        const { address, chain } = req.query;
        const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
            address: address,
            chain: chain,
        });
        let userTrans = response.data.result;

        // ダミー
        if (!userTrans.length) {
            userTrans = dar.getWalletTokenTransfers
        }

        let userTransDetails = [];

        for (let i = 0; i < userTrans.length; i++) {
            const metaResponse = await Moralis.EvmApi.token.getTokenMetadata({
                addresses: [userTrans[i].address],
                chain: chain,
            });
            if (metaResponse.data[0].address === '0x057ec652a4f150f7ff94f089a38008f49a0df88e') {
                metaResponse.data = dar.getTokenMetadata
            }

            if (metaResponse.data) {
                userTrans[i].decimals = metaResponse.data[0].decimals;
                userTrans[i].symbol = metaResponse.data[0].symbol;
                userTransDetails.push(userTrans[i]);
            } else {
                console.log("no details for coin");
            }
        }
        res.send(userTransDetails);
    } catch (e) {
        res.send(e);
    }
});

app.get('/nftBalance', async (req, res) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    try {
        const { address, chain } = req.query;
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address: address,
            chain: chain,
        });

        res.send(response.data);
    } catch (e) {
        res.send(e);
    }
});
