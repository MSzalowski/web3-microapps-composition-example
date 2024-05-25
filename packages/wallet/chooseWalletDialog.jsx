import React from "react";
import { Dialog, Typography, Box, Button } from "@mui/material";

/**
 * Renders a dialog component for choosing a wallet.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates whether the dialog is open or not.
 * @param {Function} props.onWalletSelect - The function to be called when a wallet is selected.
 * @param {Function} props.onClose - The function to be called when the dialog is closed.
 * @param {Object} props... - Additional props to be spread on the Dialog component.
 * @returns {JSX.Element} The rendered ChooseWalletDialog component.
 */
export const ChooseWalletDialog = ({
  isOpen,
  onWalletSelect,
  onClose,
  ...props
}) => {
  const [walletOptions, setWalletOptions] = React.useState([]);

  React.useEffect(() => {
    const options = Object.entries(window?.cardano).reduce(
      (acc, [walletName, walletOptions]) => {
        if (
          walletOptions.supportedExtensions?.some(
            (extension) => extension.cip === 95
          )
        ) {
          acc.push({
            icon: walletOptions.icon,
            name: walletName,
          });
        }
        return acc;
      },
      []
    );
    setWalletOptions(options);
  }, [setWalletOptions]);

  return (
    <Dialog open={isOpen} onClose={onClose} {...props}>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          Choose your wallet
        </Typography>
        <Typography>
          Please select your wallet to connect to the application.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          {walletOptions.map((walletOption) => (
            <Button
              variant="contained"
              size="large"
              onClick={() => onWalletSelect(walletOption.name)}
              startIcon={
                <img
                  src={walletOption.icon}
                  alt={walletOption.name}
                  width={24}
                  height={24}
                />
              }
            >
              {walletOption.name}
            </Button>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
};
