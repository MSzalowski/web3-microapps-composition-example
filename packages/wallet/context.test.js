import React from "react";
import { render, screen, act } from "@testing-library/react";
import { WalletProvider, useWallet } from "./context";

describe("WalletProvider", () => {
  test("should render children components", () => {
    render(
      <WalletProvider>
        <div>Child Component</div>
      </WalletProvider>
    );

    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });

  test("should provide wallet context to children components", () => {
    let walletApi;
    const TestComponent = () => {
      const { walletApi: contextWalletApi } = useWallet();
      walletApi = contextWalletApi;
      return null;
    };

    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );

    expect(walletApi).toBeNull();
  });

  test("should connect wallet and set walletApi", async () => {
    const mockEnable = jest.fn().mockResolvedValue("mockWalletApi");
    window.cardano = {
      walletName: {
        enable: mockEnable,
        supportedExtensions: [{ cip: 95 }],
      },
    };

    const TestComponent = () => {
      const { connectWallet, walletApi } = useWallet();

      React.useEffect(() => {
        const connect = async () => {
          await act(async () => {
            await connectWallet("walletName");
          });
        };
        connect();
      }, [connectWallet]);

      return <div>{walletApi}</div>;
    };

    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );

    const walletApiElement = await screen.findByText("mockWalletApi");
    expect(walletApiElement).toBeInTheDocument();
    expect(mockEnable).toHaveBeenCalledWith({ extensions: [{ cip: 95 }] });
  });

  test("should disconnect wallet and set walletApi to null", () => {
    const TestComponent = () => {
      const { disconnectWallet, walletApi } = useWallet();

      React.useEffect(() => {
        const disconnect = () => {
          disconnectWallet();
        };
        disconnect();
      }, [disconnectWallet]);

      return <div>{`${walletApi}`}</div>;
    };

    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );

    const walletApiElement = screen.getByText("null");
    expect(walletApiElement).toBeInTheDocument();
  });
});

describe("useWallet", () => {
  test("should throw an error if used outside of WalletProvider", () => {
    const TestComponent = () => {
      useWallet();
      return null;
    };

    expect(() => {
      render(<TestComponent />);
    }).toThrow("useWallet must be used within a WalletProvider");
  });
});
