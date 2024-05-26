import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
// design system does not have types
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import theme from "@packages/design-system";
// wallet does not have types
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { WalletProvider } from "@packages/wallet";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <WalletProvider>
          <App />
        </WalletProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
