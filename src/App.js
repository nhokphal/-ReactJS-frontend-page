import logo from "./logo.svg";
import "./App.css";
import Style from "./Components/Testing/Style";
import Feed from "./Components/Feed";
import NavBar from "./Components/NavBar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./Components/Add";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar mode={mode} setMode={setMode} />
        <Add />
        <Stack direction="row" space={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
