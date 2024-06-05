import {
  LIQUIDITY_STATE_LAYOUT_V4,
  RAYDIUM_MAINNET,
} from "@raydium-io/raydium-sdk";
import { Connection, PublicKey } from "@solana/web3.js";

export default async function poolIdByTokenPair(
  connection: Connection,
  baseToken: PublicKey,
  quoteToken: PublicKey
) {
  let accounts = await connection.getProgramAccounts(
    new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),
    {
      commitment: "confirmed",
      filters: [
        { dataSize: LIQUIDITY_STATE_LAYOUT_V4.span },
        {
          memcmp: {
            offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("baseMint"),
            bytes: baseToken.toBase58(),
          },
        },
        {
          memcmp: {
            offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("quoteMint"),
            bytes: quoteToken.toBase58(),
          },
        },
      ],
    }
  );
  if (accounts.length > 0) {
    return accounts[0].pubkey;
  } else {
    //retry with baseToken and quoteToken swapped, so we can get the poolId
    // and if it fails, throw exception
    accounts = await connection.getProgramAccounts(
      new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),
      {
        commitment: "confirmed",
        filters: [
          { dataSize: LIQUIDITY_STATE_LAYOUT_V4.span },
          {
            memcmp: {
              offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("baseMint"),
              bytes: quoteToken.toBase58(),
            },
          },
          {
            memcmp: {
              offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("quoteMint"),
              bytes: baseToken.toBase58(),
            },
          },
        ],
      }
    );
    console.log("accounts2:", accounts);
    if (accounts[0]?.pubkey) {
      return accounts[0].pubkey;
    } else {
      return null;
    }
    // return accounts.map(({ pubkey, account }) => ({
    //   id: pubkey.toString(),
    //   ...LIQUIDITY_STATE_LAYOUT_V4.decode(account.data),
    // }))
  }
}
