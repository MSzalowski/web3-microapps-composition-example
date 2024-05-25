import type { Metadata } from "next";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Poppins } from "next/font/google";

import { ThemeWrapper } from "@/components/ThemeWrapper";
import { WalletWrapper } from "@/components/WalletWrapper";
import { AppBar } from "@/components/AppBar";
import { Drawer } from "@/components/Drawer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Web3 Next.js Wrapper",
  description: "Web3 Next.js Wrapper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeWrapper>
          <WalletWrapper>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar />
              <Drawer />
              <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
                <Toolbar />
                {children}
              </Box>
            </Box>
          </WalletWrapper>
        </ThemeWrapper>
      </body>
    </html>
  );
}
