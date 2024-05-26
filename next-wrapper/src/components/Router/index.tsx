"use client";
import React from "react";
import { Routes as BaseRoutes, BrowserRouter, Route } from "react-router-dom";
import dynamic from "next/dynamic";

const WalletConnectPillar = dynamic(
  () => import("@pillars/wallet-connect-pillar"),
  {
    ssr: false,
  }
);

export const Routes = () => {
  return (
    <BaseRoutes>
      <Route path="/*" element={<WalletConnectPillar />} />
    </BaseRoutes>
  );
};

export const RouterWrapper = ({ children }: React.PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
