//need: input token, output token, input token Amount, slippage

import { CoinlistItem } from "@/types/CoinList";
import { Wallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useState } from "react";
import React from "react";
import {
  BigNumberish,
  TOKEN_PROGRAM_ID,
  Token,
  TokenAmount,
  Percent,
  jsonInfo2PoolKeys,
  Liquidity,
  ApiPoolInfoV4,
  ReplaceType,
  LiquidityPoolKeys,
  CurrencyAmount,
} from "@raydium-io/raydium-sdk";
import poolIdByTokenPair from "@/util/poolIdByTokenPair";
import { formatAmmKeysById } from "@/util/formatAmmKeysById";
import { debounce } from "@mui/material";

// return outAmount, minAmountOut, quoting (boolean)
export default function useRaydiumQuote(
  connection: Connection,
  wallet: Wallet,
  inputToken: CoinlistItem,
  outputToken: CoinlistItem,
  inputAmount: BigNumberish,
  slippage: number
) {
  const [quoting, setQuoting] = useState(true);
  const [quote, setQuote] = useState("0");
  const [poolKeys, setPoolKeys] = useState<LiquidityPoolKeys>();
  const [inputTokenAmount, setInputTokenAmount] = useState<TokenAmount>();
  const [outputTokenAmount, setOutputTokenAmount] = useState<TokenAmount>();

  React.useEffect(() => {
    async function quoteFFI() {
      setQuoting(true);
      const inputTokenSDK = new Token(
        TOKEN_PROGRAM_ID,
        inputToken.mint,
        inputToken.decimals,
        inputToken.symbol,
        inputToken.name
      );
      const outputTokenSDK = new Token(
        TOKEN_PROGRAM_ID,
        outputToken.mint,
        outputToken.decimals,
        outputToken.symbol,
        outputToken.name
      );

      const inputTokenAmount = new TokenAmount(
        inputTokenSDK,
        inputAmount ? BigInt(inputAmount * 10 ** inputToken.decimals) : 0
      );
      const slippageSDK = new Percent(50, 100);

      //generate quote
      const ammId = await poolIdByTokenPair(
        connection,
        inputTokenSDK.mint,
        outputTokenSDK.mint
      );
      if (ammId) {
        console.log("AMM ID:", ammId.toBase58());
        //setQuote(ammId.toBase58());
        //time to get pool keys
        const poolKeysJSON = await formatAmmKeysById(
          connection,
          ammId.toBase58()
        );
        console.log("poolKeys:", poolKeysJSON);
        const poolKeys = jsonInfo2PoolKeys(poolKeysJSON) as LiquidityPoolKeys;

        const { amountOut, minAmountOut } = Liquidity.computeAmountOut({
          poolKeys: poolKeys,
          poolInfo: await Liquidity.fetchInfo({ connection, poolKeys }),
          amountIn: inputTokenAmount,
          currencyOut: outputTokenSDK,
          slippage: slippageSDK,
        });
        console.log("inputAmount:", inputAmount);
        console.log("amountOut:", amountOut.toFixed());
        console.log("minAmountOut:", minAmountOut.toFixed());
        setPoolKeys(poolKeys);
        setInputTokenAmount(inputTokenAmount);
        if (amountOut.raw > 1) {
          setOutputTokenAmount(amountOut as TokenAmount);
        }
        setQuote(amountOut.toFixed().toString());
        setQuoting(false);
      } else {
        console.log("ammId not found");
      }
    }

    //generate token objects for the SDK

    if (quoting) {
      quoteFFI();
    }
  }, [inputToken.mint, outputToken.mint, slippage, quoting]);
  return {
    quote,
    quoting,
    setQuoting,
    poolKeys,
    setPoolKeys,
    inputTokenAmount,
    outputTokenAmount,
  };
}
