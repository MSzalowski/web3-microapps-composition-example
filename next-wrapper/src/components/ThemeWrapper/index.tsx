"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import nextJSWrapperTheme from "../../../packages/design-system";

/**
 * Wraps the children components with a theme provider.
 *
 * @param children - The child components to be wrapped.
 * @returns The wrapped components with the theme provider.
 */
export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={nextJSWrapperTheme}>{children}</ThemeProvider>;
};
