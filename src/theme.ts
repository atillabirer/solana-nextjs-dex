"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "@fontsource/inter";
import "@fontsource/quantico";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1A1B1F",
      paper: "#1A1B1F",
    },
    primary: {
      main: "#1A1B1F",
    },
    secondary: {
      main: "#8AC9E4",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        scrollbarColor: "black",
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
