import React from "react";

const WalletContext = React.createContext();

/**
 * Provides the wallet context to its children components.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {React.ReactNode} The wrapped child components with the wallet context.
 */
export const WalletProvider = ({ children }) => {
  const [walletApi, setWalletApi] = React.useState(null);

  /**
   * Connects the wallet.
   */
  const connectWallet = React.useCallback(async (walletName) => {
    try {
      if (!window.cardano[walletName]) {
        throw new Error("Wallet not found");
      }

      if (!window.cardano[walletName]?.supportedExtensions.length) {
        throw new Error("Wallet does not support any extensions");
      }

      if (
        !window.cardano[walletName]?.supportedExtensions.some(
          (extension) => extension.cip === 95
        )
      ) {
        throw new Error("Wallet does not support CIP-95");
      }

      const walletApi = await window.cardano[walletName]?.enable({
        extensions: [{ cip: 95 }],
      });
      setWalletApi(walletApi);
      console.log("Wallet connected", { walletApi });
    } catch (error) {
      console.error(error);
      return;
    }
  }, []);

  /**
   * Disconnects the wallet.
   */
  const disconnectWallet = React.useCallback(() => {
    setWalletApi(null);
  }, []);

  const value = React.useMemo(
    () => ({
      walletApi,
      connectWallet,
      disconnectWallet,
    }),
    [walletApi, connectWallet, disconnectWallet]
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

/**
 * Custom hook that provides access to the wallet context.
 * @returns {Object} The wallet context object.
 * @throws {Error} If used outside of a WalletProvider.
 */
export const useWallet = () => {
  const context = React.useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
