import { Box, CssBaseline, Toolbar } from "@mui/material";
import { AppBar } from "@/components/AppBar";
import { Drawer } from "@/components/Drawer";
import { Routes } from "@/components/Routes";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Routes />
      </Box>
    </Box>
  );
}

export default App;
