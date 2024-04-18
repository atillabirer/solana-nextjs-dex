import { CoinlistItem } from "@/types/CoinList";
import { Metaplex } from "@metaplex-foundation/js";
import { TOKEN_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { Connection, GetProgramAccountsFilter, PublicKey } from "@solana/web3.js";



export async function getTokenAccounts(wallet: string, solanaConnection: Connection): Promise<Array<CoinlistItem>> {
    const filters:GetProgramAccountsFilter[] = [
        {
          dataSize: 165,    //size of account (bytes)
        },
        {
          memcmp: {
            offset: 32,     //location of our query in the account (bytes)
            bytes: wallet,  //our search criteria, a base58 encoded string
          },            
        }];
    const accounts = await solanaConnection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        {filters: filters}
    );
    
    let newCoinList: CoinlistItem[] = [];
    console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}.`);

    const metaplex = new Metaplex(solanaConnection);

    // return an array of promises from metaplex containing info for all mints
    const nftpromises  = accounts.map(account => {
      console.log(account.pubkey.toBase58());
      const parsedAccountInfo:any = account.account.data;
      const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
      return metaplex.nfts().findByMint({mintAddress: new PublicKey(mintAddress)})

    })
    const resolved = await Promise.all(nftpromises);
    console.log("resolved: ", resolved);

    // get token balance for each token account of user
    //const tokenBalances = await solanaConnection.getTokenAccountBalance()

    const balancePromises = accounts.map((account) => {
      return solanaConnection.getTokenAccountBalance(account.pubkey);

    })
    const resolvedBalances = await Promise.all(balancePromises);

    //get SOL balance
   const solBalance = await solanaConnection.getBalance(new PublicKey(wallet));
   console.log("solBalance: ", solBalance);
   


   

    const noBalance = resolved.map((nft,index) => {
     return {
       name: nft.name,
       mint: nft.mint.address,
       logo: nft.json?.image || "",
       decimals: nft.mint.decimals,
       balance:  Number(resolvedBalances[index].value.amount),
       uiAmount: Number(resolvedBalances[index].value.uiAmount),
       symbol: nft.json?.symbol || "NAN"
     }
      
    })
    const withSol = noBalance.push({
      mint: new PublicKey("So11111111111111111111111111111111111111112"),
      name: "Wrapped SOL",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
      balance: solBalance,
      decimals: 9,
      uiAmount: solBalance / 10 ** 9,
      symbol: "SOL"
    })
    return noBalance;

    // get balances for each token account
    

    // accounts.forEach((account, i) => {
    //     //Parse the account data
    //     const parsedAccountInfo:any = account.account.data;
    //     console.log(parsedAccountInfo);
    //     const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
    //     const tokenBalance: number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["amount"];
    //     const decimals:number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["decimals"];
    //     //Log results
    //     console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
    //     console.log(`--Token Mint: ${mintAddress}`);
    //     console.log(`--Token Balance: ${tokenBalance}`);
    //     //get metadata from metaplex
    //     const metadata = metaplex.nfts().findByMint({mintAddress: new PublicKey(mintAddress)}).then((resp) => {
    //       console.log(resp);
    //       return resp;
    //     })
    //     newCoinList.push({
    //         name: parsedAccountInfo["parsed"]["info"]["mint"],
    //         mint: new PublicKey(mintAddress),
    //         logo: "https://cdnlogo.com/logos/e/81/ethereum-eth.svg",
    //         decimals,
    //         balance: tokenBalance

    //     });
    // });
    return newCoinList;
}