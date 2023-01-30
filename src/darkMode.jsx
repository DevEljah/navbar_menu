/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////// App reset !! ////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
import "./App.css";
// import DrawerAppBar from "./menu/DrawerAppBar";
import Navbar from "./menu/Navbar2";
// import PrimarySearchAppBar from "./menu/PrimarySearchAppBar";
// import MenuAppBar from "./menu/MenuAppBar";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import ResponsiveAppBar from "./menu/ResponsiveAppBar";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#a01010",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#999999",
    },
  },
});

function App() {
  const [light, setLight] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline /> {/* CssBaseline !??! */}
        <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
        <Navbar />
        {/*   <PrimarySearchAppBar /> */}
        {/* <MenuAppBar /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
