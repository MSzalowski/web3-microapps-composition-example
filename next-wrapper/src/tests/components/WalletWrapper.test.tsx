import React from "react";
import { render, act, screen } from "@testing-library/react";
import { WalletWrapper } from "@/components/WalletWrapper";
import { useWallet } from "../../../../packages/wallet";

describe("WalletWrapper", () => {
  it("renders children components", () => {
    const { getByText } = render(
      <WalletWrapper>
        <div>Child Component</div>
      </WalletWrapper>
    );

    expect(getByText("Child Component")).toBeInTheDocument();
  });

  it("has access to the wallet API", async () => {
    const mockEnable = jest.fn().mockResolvedValue("mockWalletApi");
    // @ts-expect-error
    window.cardano = {
      walletName: {
        enable: mockEnable,
        supportedExtensions: [{ cip: 95 }],
      },
    };
    const TestComponent = () => {
      // @ts-expect-error
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
      <WalletWrapper>
        <TestComponent />
      </WalletWrapper>
    );

    const walletApiElement = await screen.findByText("mockWalletApi");
    expect(walletApiElement).toBeInTheDocument();
    expect(mockEnable).toHaveBeenCalledWith({ extensions: [{ cip: 95 }] });
  });
});
