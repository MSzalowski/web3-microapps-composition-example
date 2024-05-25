"use client";
import { useWallet } from "@next-wrapper/wallet";

export default function Page() {
  // @next-wrapper/wallet does not provide type declarations
  // @ts-expect-error
  const { connectWallet, disconnectWallet, walletApi } = useWallet();
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
        <button
          onClick={async () => {
            if (walletApi) {
              disconnectWallet();
            } else {
              await connectWallet("eternl");
            }
          }}
        >
          {walletApi ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  );
}
