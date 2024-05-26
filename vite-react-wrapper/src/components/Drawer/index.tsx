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
import { useNavigate } from "react-router-dom";

import { navItems } from "@/constants";

/**
 * A custom drawer component.
 * Renders a permanent drawer with a toolbar and a list of items.
 */
export const Drawer = () => {
  const navigate = useNavigate();
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
          {navItems.map(({ path, text }) => (
            <ListItem key={text} disablePadding role="listitem">
              <ListItemButton onClick={() => navigate(path)}>
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
