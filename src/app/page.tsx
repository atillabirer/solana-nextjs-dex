"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";

import SwapInputComponent from "@/components/SwapInputComponent";
import CoinSelectDialog from "@/components/CoinSelectDialog";
import { CoinlistItem, defaultList } from "@/types/CoinList";
import { Card, Button } from "@mui/material";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import DappBar from "@/components/DappBar";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PublicKey, clusterApiUrl } from "@solana/web3.js";
import SwapComponentCard from "@/components/SwapComponentCard";
import "./global.css";
import useRaydiumQuote from "@/hooks/useRaydiumQuote";
import { privateConnection } from "@/util/privateRpc";

export default function Home() {
  const [inputAmount, setInputAmount] = React.useState("1");
  const [outputAmount, setOutputAmount] = React.useState("0");
  const [coinList, setCoinList] = React.useState<CoinlistItem[]>(defaultList);
  const [tokenA, setTokenA] = React.useState<CoinlistItem>(coinList[0]);
  const [tokenB, setTokenB] = React.useState<CoinlistItem>(coinList[2]);
  const [coinListLoading, setCoinListLoading] = React.useState<boolean>(false);
  const [addNewInput, setAddNewInput] = React.useState("");

  React.useEffect(() => {
    console.log(
      `token A: ${tokenA.mint.toString()} token B: ${tokenB.mint.toString()}`
    );
  }, [tokenA.mint, tokenB.mint]);
  React.useEffect(() => {
    setTokenA(
      coinList.find(
        (item) =>
          item.mint.toString() === "So11111111111111111111111111111111111111112"
      )!
    );
  }, [coinList[0].balance]);

  // const calculatedOutputAmount = React.useMemo(() => {
  //   async function calculatedAmountFFI() {
  //     const amountLamports = Number(inputAmount) * 10 ** tokenA.decimals;
  //     const quoteResponse = await (
  //       await fetch(
  //         `https://quote-api.jup.ag/v6/quote?inputMint=${tokenA.mint.toString()}&outputMint=${tokenB.mint.toString()}&amount=${amountLamports}&slippageBps=50`
  //       )
  //     ).json();
  //     //set outputAmount as the UI version of the output amount from the jupiter API response
  //     console.log(quoteResponse);
  //     const outAmount = quoteResponse.outAmount;
  //     const uiAmount = outAmount / 10 ** tokenB.decimals;
  //   }
  //   calculatedAmountFFI();
  // }, [inputAmount, tokenA.mint.toString(), tokenB.mint.toString()]);

  const [modalOpen, setModalOpen] = React.useState(false);
  const [changesSide, setChangesSide] = React.useState<"A" | "B">("A");
  const { wallet } = useWallet();

  const [swapping, setSwapping] = React.useState(false);
  const quoteBag = useRaydiumQuote(
    privateConnection,
    wallet!,
    tokenA,
    tokenB,
    inputAmount,
    50
  );
  const { quote, quoting, setQuoting, poolKeys, setPoolKeys } = quoteBag;

  React.useEffect(() => {
    if (
      window?.location.hostname === "localhost" ||
      window?.location.hostname.endsWith("netlify.app")
    ) {
      //ok
    } else {
      throw Error("This is not localhost or netlify.app");
    }
  }, []);

  return (
    <>
      <DappBar />
      <Container maxWidth="sm">
        <SwapComponentCard
          quotebag={quoteBag}
          direction="up"
          setChangesSide={setChangesSide}
          setModalOpen={setModalOpen}
          inputToken={tokenA}
          outputToken={tokenB}
          setInputToken={setTokenB}
          setOutputToken={setTokenA}
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
          outputAmount={outputAmount}
          setOutputAmount={setOutputAmount}
          swapping={swapping}
          setSwapping={setSwapping}
        />
        {/*  <Card sx={{ my: 5, borderRadius: 4, p: 5 }}>
          <SwapInputComponent
            direction="up"
            value={Number(inputAmount)}
            setValue={setInputAmount}
            changesSide={setChangesSide}
            setModalOpen={setModalOpen}
            inputToken={tokenA}
            setInputToken={setTokenA}
          />
          <SwapInputComponent
            direction="down"
            value={Number(calculatedOutputAmount)}
            setValue={setInputAmount}
            changesSide={setChangesSide}
            setModalOpen={setModalOpen}
            inputToken={tokenB}
            setInputToken={setTokenB}
          />
          <Card sx={{ p: 0, m: 0, borderRadius: 4 }}>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              size="large"
              disabled={swapping}
              onClick={swapFFI}

            >
              {swapping ? "Swapping" : "Swap"}
            </Button>
          </Card>
  </Card> */}
        <CoinSelectDialog
          setQuoting={quoteBag.setQuoting}
          open={modalOpen}
          setModalOpen={setModalOpen}
          changesSide={changesSide}
          setInputToken={changesSide == "A" ? setTokenA : setTokenB}
          coinList={coinList}
          setCoinList={setCoinList}
          coinListLoading={coinListLoading}
          setCoinListLoading={setCoinListLoading}
          addNewInput={addNewInput}
          setAddNewInput={setAddNewInput}
        />
      </Container>
    </>
  );
}
