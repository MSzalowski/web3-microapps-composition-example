"use client";
import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";

/**
 * Represents the AppBar component.
 * It is a fixed position app bar that displays the title "Web3 Next.js Wrapper".
 */
export const AppBar = () => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        zIndex: (theme: any) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          Web3 Next.js Wrapper
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
