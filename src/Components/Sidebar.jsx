import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  Groups,
  Settings,
  Storefront,
  Person,
  AccountBox,
  NightsStay,
} from "@mui/icons-material";

function Sidebar({ mode, setMode }) {
  return (
    // <div>
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItemButton
            /*component="btn-Home" href="./Home"*/ sx={{ gap: "10px" }}
          >
            <Home />
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            /*component="./Settings" href="Settings"*/ sx={{ gap: "10px" }}
          >
            <Settings />
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton
            /*component="btn-friend" href="./Friend"*/ sx={{ gap: "10px" }}
          >
            <Person />
            <ListItemText primary="Friend" />
          </ListItemButton>
          <ListItemButton
            /*compnent="btn-groups" href="./Groups"*/ sx={{ gap: "10px" }}
          >
            <Groups />
            <ListItemText primary="Groups" />
          </ListItemButton>
          <ListItemButton
            /*component="btn-marketplace" href="./Profile"*/ sx={{
              gap: "10px",
            }}
          >
            <Storefront />
            <ListItemText primary="Marketplace" />
          </ListItemButton>

          <ListItemButton
            /*component is a tag component="btn-profile"*/ sx={{
              gap: "10px",
            }}
          >
            <AccountBox />
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton sx={{ gap: "10px" }}>
            <ListItemIcon>
              <NightsStay />
            </ListItemIcon>
            <Switch
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
    // </div>
  );
}

export default Sidebar;
