import React from 'react'
import axios from 'axios'

function Tokens({ wallet, chain, tokens, setTokens }) {
    async function getTokenBalances() {
        const response = await axios.get("http://localhost:8080/tokenBalances", {
            params: {
                address: wallet,
                chain: chain,
            },
        });
        console.log("getTokenBalances")
        // console.log(response);
        if (response.data === []) {
            console.log(response.data);
            let t = response.data;

            for (let i = 0; i < t.length; i++) {
                t[i].bal = (Number(t[i].balance) / Number(`1E${t[i].decimals}`)).toFixed(3);
                t[i].val = ((Number(t[i].balance) / Number(`1E${t[i].decimals}`)) * Number(t[i].usd)).toFixed(2);
            }
            setTokens(t)
        } else {
            console.log("null");
            setTokens([{
                nativePrice: {
                    value: '1000000000000000000',
                    decimals: 18,
                    name: 'Ether',
                    symbol: 'ETH',
                    bal: "10000000",
                    val: "10000000"
                },
                usdPrice: 1508.2973536121729,
                exchangeAddress: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
                exchangeName: 'Uniswap v3'
            }])
        }
    }
    return (
        <>
            <p>
                <button onClick={getTokenBalances}>Get Tokens</button>
                <br />
                {tokens.length > 0 && tokens.map((e) => {
                    return (
                        <>
                            <span>
                                {e.symbol} {e.bal}, (${e.val})
                            </span>
                            <br />
                        </>
                    );
                })}
            </p>
        </>
    )
}

export default Tokens