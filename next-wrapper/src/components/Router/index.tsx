"use client";
import React from "react";
import { Routes as BaseRoutes, BrowserRouter, Route } from "react-router-dom";
import dynamic from "next/dynamic";

const WalletConnectPillar = dynamic(() => import("wallet-connect-pillar"), {
  ssr: false,
});

const WalletAddressesPillar = dynamic(() => import("wallet-addresses-pillar"), {
  ssr: false,
});

export const Routes = () => {
  return (
    <BaseRoutes>
      <Route path="/" element={<WalletConnectPillar />} />
      <Route path="/addresses" element={<WalletAddressesPillar />} />
    </BaseRoutes>
  );
};

export const RouterWrapper = ({ children }: React.PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
