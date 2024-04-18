import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import SolanaLogo from "./Solana-Logo.png";
import React from "react";
import { CoinlistItem } from "@/types/CoinList";

// wrapper + input

interface SwapInputComponentProps {
  direction: "up" | "down";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setChangesSide: React.Dispatch<React.SetStateAction<"A" | "B">>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputToken: CoinlistItem,
  setInputToken: React.Dispatch<React.SetStateAction<CoinlistItem>>;
}

export default function SwapInputComponent(props: SwapInputComponentProps) {
  const { direction, value, setValue, setChangesSide, setModalOpen, inputToken, setInputToken } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var reg = /^-?\d*\.?\d*$/
    if (reg.test(event.target.value)) {
      setValue(event.target.value);
    }
  };
 
  return (
    <>
      <Typography variant="button">
        {direction === "up" ? "You're selling:" : "You're buying:"}
      </Typography>
      <Grid
        container
        border="outset"
        sx={{ mb: 3, borderRadius: 5, backgroundColor: "#C6CCD8" }}
      >
        <Grid item xs={3}>
          <Button
            sx={{
              backgroundColor: "#a5aab5",
              borderRadius: 3,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              height: "100%"
            }}
            variant="contained"
            color="secondary"
            startIcon={<Avatar src={inputToken.logo} />}
            fullWidth
            onClick={() => {
              if(setChangesSide) setChangesSide(direction === "up" ? "A" : "B");
              setModalOpen(true);
            }}
          >
           {inputToken.symbol}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            borderWidth: 1,
            borderRadius: 4,
            p: 1,
            backgroundColor: "#C6CCD8",
          }}
        >
          <TextField
            variant="standard"
            value={String(value)}
            disabled={direction === "down"}
            type="text"
            size="medium"
            onChange={handleInputChange}
            InputProps={{ disableUnderline: true }}
            fullWidth
            sx={{
              margin: "auto",
              backgroundColor: "#C6CCD8",
              borderRadius: 10,
              borderStyle: "hidden",
              
            }}
          />
        </Grid>
        {
          direction === "up" && 
          (
            <>
          <Grid
          item
          xs={3}
          >
          <TextField
             InputProps={{
              inputProps: {
                  style: { textAlign: "right" },
              }
          }}
          sx={{
      "& fieldset": { border: 'none',textAlign: 'center'},
      
    }} disabled value={inputToken.uiAmount}></TextField>
          
          </Grid>
          <Grid item xs={2}>
        <Button variant="contained" fullWidth sx={{height:"100%",borderRadius: 4,borderTopLeftRadius: 0,borderBottomLeftRadius: 0}} onClick={() => setValue(inputToken.uiAmount.toString())}>MAX</Button>
            </Grid>
            </>
          )
        }
      </Grid>
    </>
  );
}
