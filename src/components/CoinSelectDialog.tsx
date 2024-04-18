import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useMemo } from "react";
import SolanaLogo from "./Solana-Logo.png";
import { CoinlistItem, defaultList } from "@/types/CoinList";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { Metaplex, PublicKey } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { getTokenAccounts } from "@/util/getTokenAccounts";

interface CoinSelectDialogProps {
  open: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changesSide: "A" | "B"; // whether it changes the buying or selling sides
  setInputToken: React.Dispatch<React.SetStateAction<CoinlistItem>>;
  setCoinList: React.Dispatch<React.SetStateAction<CoinlistItem[]>>;
  coinList: CoinlistItem[];
  coinListLoading: boolean;
  setCoinListLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addNewInput: string;
  setAddNewInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function CoinSelectDialog(props: CoinSelectDialogProps) {
  const {
    open,
    setModalOpen,
    
    setInputToken,
    coinList,
    setCoinList,
    coinListLoading,
    setCoinListLoading,
    addNewInput,
    setAddNewInput,
  } = props;

  const connection = useMemo(() => new Connection("https://methodical-long-dust.solana-mainnet.quiknode.pro/870f16040a2c16cfd4b5217a6d6e0f28fc1a6438/"),[])
  const {publicKey,connected} = useWallet();

  

  

  React.useEffect(() => {
    async function userTokenFFI() {

      console.log("userTokenFFI called");
      if(publicKey) {

        setCoinListLoading(true);
        const GTAresponse = await getTokenAccounts(publicKey?.toBase58(),connection);
        console.log("GTAResponse:",GTAresponse);

        // loop over coinList, if coinList already has GTAResponse coin, update balance and uiAmount in coinList item
        // if GTAResponse does not exist in coinList, add the coinList item
        // update coinList state accordingly
        if(GTAresponse) {

        setCoinList((prev) => {
          const filteredList =  prev.filter((item) => !GTAresponse.find((value) => (value.mint.toBase58() === item.mint.toBase58())))
          //find sol and load it up
          return [...GTAresponse,...filteredList];

        })
        
        }
        setCoinListLoading(false);


        // GTAresponse.filter((item: any) => {
        //   //find the tokens that are already in the list
        //   const coin = coinList.find((coin) => coin.mint.toBase58() === item.mint.toBase58());
        //   console.log("coin:",coin);
        //   if(!coin) {
        //     setCoinList((prev) => [ {
        //       mint: item.mint,
        //       name: item.name,
        //       symbol: "NAN",
        //       decimals: item.decimals,
        //       logo: item.logo,
        //       uiAmount: item.uiAmount
        //     },...prev]);
        //   }
        // });



        
      } else {
        console.log("no public key");
      }


    }
    if(connected) {
    userTokenFFI();
    }
  },[connected]);


  async function addNewCoinToListMaybe(mint: string) {
    //get metaplex data of mint
    

    const metaplex = new Metaplex(connection);
    const nft = await metaplex
      .nfts()
      .findByMint({ mintAddress: new PublicKey(mint) });

    if (nft) {
      setCoinListLoading(true);
      console.log(nft);
      if (nft.json?.name && nft.json?.image) {
        const newCoin: CoinlistItem = {
          name: nft.json.name,
          logo: nft.json.image,
          mint: nft.mint.address,
          decimals: nft.mint.decimals,
          uiAmount: 0,
          symbol: nft.json.symbol
        };
        console.log("newcoinlist:",[...coinList, newCoin]);
        setCoinList([newCoin,...coinList]);
        setCoinListLoading(false);
        //setInputToken(newCoin);
        //setModalOpen(false);
      }
    }
  }

  return (
    <Dialog open={open} fullWidth>
      <DialogActions>
        <IconButton
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>

      <DialogContent>
      <Typography>Insert Mint Address:</Typography>
        <Grid container>
          <Grid item xs={9}>
          
        <TextField
          fullWidth
          variant="outlined"
          color="secondary"
          onChange={(e) => setAddNewInput(e.target.value)}
        />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              color="success"
              sx={{height:"100%"}}
              onClick={() => addNewCoinToListMaybe(addNewInput)}
            >
              Add Token
            </Button>
          </Grid>
        </Grid>
        {
          coinListLoading? (
            <List sx={{height:"50vh"}}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar  src="" alt="solana">
                   
                  </Avatar>
                </ListItemAvatar>
                <ListItemButton>
                  <ListItemText primary="Loading..." />
                </ListItemButton>
              </ListItem>
            </List>
          ) : (
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {coinList.map((coin) => (
                <ListItem key={coin.mint.toBase58()}>
                  <ListItemAvatar>
                    <Avatar src={coin.logo} alt={coin.name}/>
                     
                  </ListItemAvatar>
                  <ListItemButton
                    onClick={() => {
                      setInputToken(coin);
                      setModalOpen(false);
                    }}
                  >
                    <ListItemText primary={coin.name} />
                  </ListItemButton>
                  <ListItemText primaryTypographyProps={{textAlign:"right"}} primary={coin.uiAmount + " " + coin.symbol} />
                </ListItem>
              ))}
            </List>
          )
        }
 
      </DialogContent>
    </Dialog>
  );
}
