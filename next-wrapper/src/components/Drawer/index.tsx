import React from "react";
import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Web } from "@mui/icons-material";

/**
 * A custom drawer component.
 * Renders a permanent drawer with a toolbar and a list of items.
 */
export const Drawer = () => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar role="toolbar" />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["Wallet connect pillar", "Wallet addresses pillar"].map((text) => (
            <ListItem key={text} disablePadding role="listitem">
              <ListItemButton>
                <ListItemIcon>
                  <Web />
                </ListItemIcon>
                <ListItemText primary={text} role="listitemtext" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MuiDrawer>
  );
};
