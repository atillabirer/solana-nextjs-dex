//parent component for swaps, to be used with wallet context and useWallet()

import { Card, Button, Typography } from "@mui/material";
import SwapInputComponent from "./SwapInputComponent";
import { CoinlistItem } from "@/types/CoinList";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useCallback, useEffect, useMemo } from "react";
import { Wallet } from "@project-serum/anchor";
import { VersionedTransaction } from "@solana/web3.js";
import useRaydiumQuote from "@/hooks/useRaydiumQuote";
import { connected } from "process";
import { privateConnection } from "@/util/privateRpc";
import useRaydiumSwap from "@/hooks/useRaydiumSwap";
import { useDebouncedCallback } from "use-debounce";

interface SwapComponentCardProps {
  direction: "up" | "down";
  setChangesSide: React.Dispatch<React.SetStateAction<"A" | "B">>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputToken: CoinlistItem;
  setInputToken: React.Dispatch<React.SetStateAction<CoinlistItem>>;
  outputToken: CoinlistItem;
  setOutputToken: React.Dispatch<React.SetStateAction<CoinlistItem>>;
  inputAmount: string;
  setInputAmount: React.Dispatch<React.SetStateAction<string>>;
  outputAmount: string;
  setOutputAmount: React.Dispatch<React.SetStateAction<string>>;
  swapping: boolean;
  setSwapping: React.Dispatch<React.SetStateAction<boolean>>;
  quotebag: any;
}

export default function SwapComponentCard(props: SwapComponentCardProps) {
  const {
    direction,
    setChangesSide,
    setModalOpen,
    inputToken,
    setInputToken,
    outputToken,
    setOutputToken,
    inputAmount,
    setInputAmount,
    outputAmount,
    setOutputAmount,
    quotebag,
  } = props;

  const {
    connect,
    select,
    wallet,
    publicKey,
    connected,
    sendTransaction,
    signTransaction,
  } = useWallet();

  const { connection } = useConnection();
  const debounced = useDebouncedCallback(() => {
    console.log("debounced called");
    quotebag.setQuoting(true);
  }, 1000);
  // const performSwap = useEffect(() => {
  //   if (!wallet) {
  //     alert("connect wallet first");
  //     setSwapping(false);
  //     return;
  //   }
  //   console.log("in performSwap");

  //   async function swapFFI() {
  //     console.log("dec:", inputToken.decimals);
  //     console.log("in:", inputAmount);
  //     const amountLamports = Number(inputAmount) * 10 ** inputToken.decimals;
  //     console.log(amountLamports);
  //     const quoteResponse = await (
  //       await fetch(
  //         `https://quote-api.jup.ag/v6/quote?inputMint=${inputToken.mint.toString()}&outputMint=${outputToken.mint.toString()}&amount=${amountLamports}&slippageBps=5000`
  //       )
  //     ).json();
  //     console.log(quoteResponse);
  //     const { swapTransaction } = await (
  //       await fetch("https://quote-api.jup.ag/v6/swap", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           // quoteResponse from /quote api
  //           quoteResponse,
  //           // user public key to be used for the swap
  //           userPublicKey: publicKey!.toString(),

  //           // auto wrap and unwrap SOL. default is true
  //           wrapAndUnwrapSol: true,
  //           legacyTransactions: false,
  //           // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
  //           // feeAccount: "fee_account_public_key"
  //         }),
  //       })
  //     ).json();
  //     console.log(swapTransaction);
  //     const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
  //     var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
  //     if (signTransaction) {
  //       var signed = await signTransaction(transaction);
  //       await sendTransaction(signed, connection, {
  //         skipPreflight: true,
  //       });
  //     }
  //   }

  //   if (wallet && swapping && publicKey) {
  //     console.log("wallet and swapping");
  //     //fetch quote
  //     swapFFI();

  //     setSwapping(false);
  //   }
  // }, [swapping]);

  const { swapping, setSwapping } = useRaydiumSwap(
    privateConnection,
    publicKey!,
    quotebag.inputTokenAmount,
    quotebag.outputTokenAmount,

    quotebag.poolKeys
  );
  // React.useEffect(() => {
  //   setQuoting(true);
  // }, [inputAmount]);
  React.useEffect(() => {
    if (wallet && swapping && publicKey) {
      console.log("wallet and swapping");
      //fetch quote
      setSwapping(false);
    }
  }, [inputAmount, swapping]);

  console.log(wallet, swapping, publicKey);

  return (
    <Card
      sx={{
        my: 5,
        borderRadius: 4,
        p: 5,
        borderWidth: 1,
        borderColor: "rgba(138,201,228,0.2)",
        borderStyle: "solid",
      }}
    >
      <Typography variant="h4" color="white" style={{ paddingBottom: 10 }}>
        Swap
      </Typography>
      <SwapInputComponent
        setQuoting={quotebag.setQuoting}
        direction="up"
        debounced={debounced}
        value={inputAmount}
        setValue={setInputAmount}
        setChangesSide={setChangesSide}
        setModalOpen={setModalOpen}
        inputToken={inputToken}
        setInputToken={setInputToken}
      />
      <SwapInputComponent
        setQuoting={quotebag.setQuoting}
        direction="down"
        value={quotebag.quoting ? "..." : quotebag.quote}
        setValue={setOutputAmount}
        setChangesSide={setChangesSide}
        setModalOpen={setModalOpen}
        inputToken={outputToken}
        setInputToken={setOutputToken}
      />
      <Card sx={{ p: 0, m: 0, borderRadius: 1 }}>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          size="large"
          disabled={swapping}
          onClick={() => setSwapping(true)}
        >
          {swapping ? "Swapping" : "Swap"}
        </Button>
      </Card>
    </Card>
  );
}
