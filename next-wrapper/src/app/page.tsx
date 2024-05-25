"use client";
import React from "react";
import { ChooseWalletDialog, useWallet } from "@next-wrapper/wallet";

export default function Page() {
  // @next-wrapper/wallet does not provide type declarations
  // @ts-expect-error
  const { connectWallet, disconnectWallet, walletApi } = useWallet();
  const [isWalletDialogOpen, setIsWalletDialogOpen] = React.useState(false);

  const handleWalletSelect = (walletName: string) => {
    connectWallet(walletName);
    setIsWalletDialogOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Web3 Next.js Wrapper</h1>
        <p>{walletApi ? "Wallet is connected" : "Wallet is not connected"}</p>
        <p>Wallet API: {JSON.stringify(walletApi, null, 2)}</p>
        <button onClick={() => setIsWalletDialogOpen(true)}>
          {walletApi ? "Disconnect" : "Connect"}
        </button>
      </div>
      <ChooseWalletDialog
        isOpen={isWalletDialogOpen}
        onClose={() => setIsWalletDialogOpen(false)}
        onWalletSelect={handleWalletSelect}
      />
    </div>
  );
}
