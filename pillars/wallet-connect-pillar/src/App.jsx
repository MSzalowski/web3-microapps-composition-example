import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChooseWalletDialog, useWallet } from "@packages/wallet";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

/**
 * Renders the ChooseWalletRoute component.
 * This component displays a button that opens a wallet modal and allows the user to connect their wallet.
 * After connecting the wallet, it navigates to the "/wallet-api" route.
 */
const ChooseWalletRoute = () => {
  const navigate = useNavigate();
  const { connectWallet } = useWallet();
  const [isChooseWalletModalOpen, setIsChooseWalletModalOpen] =
    React.useState(false);

  const handleConnectWallet = React.useCallback(
    (walletName) => {
      console.log(`Connecting to wallet: ${walletName}`);
      connectWallet(walletName);
      setIsChooseWalletModalOpen(false);
      navigate("/wallet-api");
    },
    [connectWallet, navigate]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        I am the wallet connect pillar
      </Typography>
      <Button
        variant="outlined"
        onClick={() => setIsChooseWalletModalOpen(true)}
      >
        Open wallet modal
      </Button>

      <ChooseWalletDialog
        isOpen={isChooseWalletModalOpen}
        onWalletSelect={handleConnectWallet}
        onClose={() => setIsChooseWalletModalOpen(false)}
      />
      <Box sx={{ height: 40 }} />
      <Typography>Routes:</Typography>
      <Link to="/wallet-api">Go to wallet API</Link>
    </Box>
  );
};

/**
 * Renders the WalletApiRoute component.
 * This component displays information about the wallet API and provides navigation links.
 *
 * @returns {JSX.Element} The rendered WalletApiRoute component.
 */
const WalletApiRoute = () => {
  const { walletApi } = useWallet();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        I am the wallet connect pillar
      </Typography>
      <Typography variant="body1">
        Wallet API is {walletApi ? "available" : "not available"}
      </Typography>
      <Typography>{JSON.stringify(walletApi, null, 2)}</Typography>
      <Box sx={{ height: 40 }} />
      <Typography>Routes:</Typography>
      <Link to="/">Go to wallet connect</Link>
    </Box>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChooseWalletRoute />} />
      <Route path="/wallet-api" element={<WalletApiRoute />} />
    </Routes>
  );
}

export default App;
