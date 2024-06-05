import { AppBar, Toolbar, Typography } from "@mui/material";
import dynamic from "next/dynamic";
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function DappBar() {
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }} elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flex: 1, fontFamily: "Quantico" }}
        >
          Sigrid
        </Typography>
        <WalletMultiButtonDynamic />
        <WalletDisconnectButtonDynamic />
      </Toolbar>
    </AppBar>
  );
}
