import { createJupiterApiClient } from "@jup-ag/api";
import { PublicKey } from "@solana/web3.js";
import { useState } from "react";



// export default function useJupiterSwap(
//   inputMint: PublicKey,
//   outputMint: PublicKey,
//   amount: bigint,
//   wallet: PublicKey
// ) {
//   const jupiterApiClient = createJupiterApiClient();

//   const [swapping, setSwapping] = useState(false);

//   async function swapFFI() {
//     setSwapping(true);
//     //get quote
//     const quote = await jupiterApiClient.quoteGet({
//       inputMint: inputMint.toBase58(),
//       outputMint: outputMint.toBase58(),
//       amount: Number(amount),
//       autoSlippage: true,
//       onlyDirectRoutes: false,
//       asLegacyTransaction: false,
      

//     });

//     console.log(quote);
//     const exchange = await jupiterApiClient.swapPost({
//       swapRequest: {
//         quoteResponse: quote,
//         userPublicKey: wallet.toBase58(),
//         dynamicComputeUnitLimit: true,
//         prioritizationFeeLamports: "auto",
//       },
//     });
//     console.dir(exchange, { depth: null });
//     setSwapping(false);
//   }

//   return {
//     jupiterApiClient, swapFFI, swapping
//   };
// }
