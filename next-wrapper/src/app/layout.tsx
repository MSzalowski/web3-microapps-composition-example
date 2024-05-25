import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Poppins } from "next/font/google";

import { ThemeWrapper } from "@/components/ThemeWrapper";
import { WalletWrapper } from "@/components/WalletWrapper";
import { AppBar } from "@/components/AppBar";
import { Drawer } from "@/components/Drawer";
import { RouterWrapper, Routes } from "@/components/Router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Web3 Next.js Wrapper",
  description: "Web3 Next.js Wrapper",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <ThemeWrapper>
          <WalletWrapper>
            <RouterWrapper>
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar />
                <Drawer />
                <Box component="main" sx={{ flexGrow: 1 }}>
                  <Toolbar />
                  <Routes />
                </Box>
              </Box>
            </RouterWrapper>
          </WalletWrapper>
        </ThemeWrapper>
      </body>
    </html>
  );
}
