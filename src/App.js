import React, { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";
import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Cursor from "./Components/Cursor";
import Content from "./Content";
import Particle from "./Components/Particle";
import { useGlobalContext } from "./Context";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [loading, setLoading] = useState(false);

  const { isdarkMode } = useGlobalContext();

  const lightTheme = {
    colors: {
      black: "#1E1E1E",
      white: "#F5F5F5",
      oceanblue: "#0077B6",
      amber: "#FFBF00",
      charcoal: "#2C3E50",
      silver: "#BDC3C7",
      cloud: "#ECF0F1",
      deepskyblue: "#1E90FF",
    },
    bg: {
      primary: "#F5F5F5"
    },
    highlight: {
      primary: "#FF8C00",
      secondary: "#A9A9A9",
      rgb: {
        primary: "255, 140, 0",
        secondary: "169, 169, 169"
      }
    },
    title: {
      primary: "30,30,30",
      secondary: "60, 60, 60",
    },
    icon: {
      primary: "#F5F5F5",
    },
    gradient: {
      bgGradient: "linear-gradient(to bottom right, #0077B6 0%, #FF8C00 100%)",
      gradient1:"linear-gradient(135deg, rgba(255, 140, 0, 0.4) 0%, rgba(255, 140, 0, 0.012) 100%)",
      gradient2:"radial-gradient(ellipse at left, #BDC3C7 0%, rgba(255, 255, 255, 0) 70%)",
    },
    border:{
      gradient1:"radial-gradient(ellipse at center, #BDC3C7 0%, rgba(255, 255, 255, 0) 70%)",
      gradient2:"radial-gradient(ellipse at left, #BDC3C7 0%, rgba(255, 255, 255, 0) 70%)",
    }
  };

  const darkTheme = {
    colors: {
      black: "#1E1E1E",
      white: "#F5F5F5",
      oceanblue: "#0077B6",
      amber: "#FFBF00",
      charcoal: "#2C3E50",
      silver: "#BDC3C7",
      cloud: "#ECF0F1",
      deepskyblue: "#1E90FF",
    },
    bg: {
      primary: "#2C3E50"
    },
    highlight: {
      primary: "#FF8C00",
      secondary: "rgb(102, 102, 102)",
      rgb: {
        primary: "255, 140, 0",
        secondary: "102, 102, 102"
      }
    },
    title: {
      primary: "245, 245, 245",
      secondary: "192, 192, 192",
    },
    icon: {
      primary: "#2C3E50",
    },
    gradient: {
      bgGradient: "linear-gradient(to bottom right, #1E1E1E 0%, #2C3E50 100%)",
      gradient1:"linear-gradient(to bottom right, #1E1E1E 0%, #2C3E50 100%)",
      gradient2:"radial-gradient(ellipse at left, #BDC3C7 0%, rgba(255, 255, 255, 0) 70%)",
    },
    border:{
      gradient1: "radial-gradient(ellipse at top,rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
      gradient2:"radial-gradient(at left center, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%);",
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Cursor />
          <div className={`app ${isdarkMode ? "dark" : "light"} overflow-hidden`}>
            <Particle />
            <Content />
          </div>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
