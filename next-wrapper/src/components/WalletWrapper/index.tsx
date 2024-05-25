"use client";
import { PropsWithChildren } from "react";
import { WalletProvider } from "../../../../packages/wallet";

/**
 * Wraps the provided children with the WalletProvider component.
 *
 * @param children - The children components to be wrapped.
 * @returns The wrapped components.
 */
export const WalletWrapper = ({ children }: PropsWithChildren) => {
  return <WalletProvider>{children}</WalletProvider>;
};
