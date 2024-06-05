import { CoinlistItem } from "@/types/CoinList";
import {
  ApiPoolInfoV4,
  Liquidity,
  LiquidityPoolKeysV4,
  SPL_ACCOUNT_LAYOUT,
  TOKEN_PROGRAM_ID,
  TokenAmount,
  TokenAccount,
} from "@raydium-io/raydium-sdk";
import { TxVersion } from "@raydium-io/raydium-sdk";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  TransactionMessage,
  VersionedMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { useState } from "react";

export async function getWalletTokenAccount(
  connection: Connection,
  wallet: PublicKey
): Promise<TokenAccount[]> {
  const walletTokenAccount = await connection.getTokenAccountsByOwner(wallet, {
    programId: TOKEN_PROGRAM_ID,
  });
  return walletTokenAccount.value.map((i) => ({
    pubkey: i.pubkey,
    programId: i.account.owner,
    accountInfo: SPL_ACCOUNT_LAYOUT.decode(i.account.data),
  }));
}

export default function useRaydiumSwap(
  connection: Connection,
  wallet: PublicKey,
  inputTokenAmount?: TokenAmount,
  outputTokenAmount?: TokenAmount,
  poolKeys?: LiquidityPoolKeysV4
) {
  const [swapping, setSwapping] = useState(false);
  const { signTransaction, sendTransaction } = useWallet();

  async function useRaydiumSwapFFI() {
    console.log("in useRaydiumSwapFFI");
    const walletTokenAccount = await getWalletTokenAccount(connection, wallet);

    if (poolKeys && inputTokenAmount && outputTokenAmount) {
      const { innerTransactions } = await Liquidity.makeSwapInstructionSimple({
        connection,
        poolKeys,
        userKeys: {
          tokenAccounts: walletTokenAccount,
          owner: wallet,
        },
        amountIn: inputTokenAmount,
        amountOut: outputTokenAmount,
        fixedSide: "in",
        makeTxVersion: TxVersion.V0,
      });
      const instructions = innerTransactions.flatMap(
        (value) => value.instructions
      );
      const message = new TransactionMessage({
        instructions: instructions,
        recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
        payerKey: wallet,
      }).compileToV0Message();
      const transaction = new VersionedTransaction(message);
      if (signTransaction && sendTransaction) {
        const signed = await signTransaction(transaction);
        await sendTransaction(signed, connection, { skipPreflight: true });
      } else {
        console.log("signTransaction or sendTransaction not found");
      }
    } else {
      console.log(poolKeys, inputTokenAmount, outputTokenAmount);
    }
  }
  if (swapping) {
    useRaydiumSwapFFI();
  }
  return { swapping, setSwapping };
}
