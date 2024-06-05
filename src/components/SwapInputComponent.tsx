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
import { DebouncedState } from "use-debounce";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "@/theme";

// wrapper + input

interface SwapInputComponentProps {
  direction: "up" | "down";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setChangesSide: React.Dispatch<React.SetStateAction<"A" | "B">>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputToken: CoinlistItem;
  setInputToken: React.Dispatch<React.SetStateAction<CoinlistItem>>;
  debounced?: DebouncedState<() => void>;
  setQuoting: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwapInputComponent(props: SwapInputComponentProps) {
  const {
    direction,
    value,
    setValue,
    setChangesSide,
    setModalOpen,
    inputToken,
    setInputToken,
    debounced,
    setQuoting,
  } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleinputhcange called");
    console.log("direction:", direction);
    if (direction == "up") {
      console.log("called debounced");
      debounced!();
    }
    var reg = /^-?\d*\.?\d*$/;
    if (reg.test(event.target.value)) {
      setValue(event.target.value);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          mb: 3,
          borderRadius: 1,
          backgroundColor: "#FAFAFA",
          borderColor: "rgba(138,201,228,0.2)",
          borderWidth: 2,
          borderStyle: "solid",
          p: 2,
        }}
      >
        <Grid
          item
          xs={direction == "up" ? 6 : 9}
          sx={{
            borderWidth: 2,
            borderRadius: 1,
            backgroundColor: "#FAFAFA",
          }}
        >
          <TextField
            value={String(value)}
            variant="standard"
            defaultValue="1"
            label={direction === "up" ? "From:" : "To:"}
            type="text"
            size="medium"
            onChange={handleInputChange}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: 18,
                color: "gray",
                opacity: 1,
                WebkitTextFillColor: direction === "up" ? "black" : "gray",
              },
            }}
            InputLabelProps={{
              style: { color: "#8AC9E4", fontWeight: "bold" },
            }}
            fullWidth
            sx={{
              margin: "auto",
              backgroundColor: "#FAFAFA",
              borderRadius: 10,
              borderStyle: "hidden",
            }}
          />
          <Typography
            variant="caption"
            sx={{ fontSize: "14px", color: "#AFB4C0" }}
          >
            Balance: {inputToken.uiAmount}
          </Typography>
        </Grid>
        <Grid item xs={direction === "up" ? 4 : 1}></Grid>
        {true && (
          <>
            <Grid item xs={2}>
              {direction === "up" && (
                <Button
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    borderRadius: 1,
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontSize: 10,
                    borderColor: "#8AC9E4",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    setValue(inputToken.uiAmount.toString());
                    setQuoting(true);
                  }}
                >
                  Max
                </Button>
              )}
              <Button
                sx={{
                  borderRadius: 1,
                }}
                size="medium"
                startIcon={<Avatar src={inputToken.logo} />}
                fullWidth
                onClick={() => {
                  if (setChangesSide)
                    setChangesSide(direction === "up" ? "A" : "B");
                  setModalOpen(true);
                }}
              >
                {inputToken.symbol}
                <KeyboardArrowDownIcon />
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
