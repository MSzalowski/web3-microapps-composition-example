import React from "react";
import { WalletContext } from "./context";

/**
 * Provides the wallet context to its children components.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {React.ReactNode} The wrapped child components with the wallet context.
 */

export const WalletProvider = ({ children }) => {
  const [isWalletConnected, setWalletConnected] = React.useState(false);

  const connectWallet = React.useCallback(() => {
    setWalletConnected(true);
  }, []);

  const disconnectWallet = React.useCallback(() => {
    setWalletConnected(false);
  }, []);

  const value = React.useMemo(() => ({}), []);
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
