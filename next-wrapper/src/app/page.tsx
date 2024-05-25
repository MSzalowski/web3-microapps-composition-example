"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChooseWalletDialog, useWallet } from "@next-wrapper/wallet";

export default function Page() {
  // @next-wrapper/wallet does not provide type declarations
  // @ts-expect-error
  const { connectWallet, walletApi } = useWallet();
  const [isWalletDialogOpen, setIsWalletDialogOpen] = React.useState(false);

  const handleWalletSelect = (walletName: string) => {
    connectWallet(walletName);
    setIsWalletDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Web3 Next.js Wrapper
        </Typography>
        <Typography variant="body1">
          {walletApi ? "Wallet is connected" : "Wallet is not connected"}
        </Typography>
        <Typography variant="body1">
          Wallet API: {JSON.stringify(walletApi, null, 2)}
        </Typography>
        <Button onClick={() => setIsWalletDialogOpen(true)} variant="contained">
          {walletApi ? "Disconnect" : "Connect"}
        </Button>
      </Box>
      <ChooseWalletDialog
        isOpen={isWalletDialogOpen}
        onClose={() => setIsWalletDialogOpen(false)}
        onWalletSelect={handleWalletSelect}
      />
    </Box>
  );
}
