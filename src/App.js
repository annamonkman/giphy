import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalSyles from "./styles/index";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainMob from "./components/MainMobile";
import MainDesktop from "./components/MainDesktop";
import Random from "./components/Random";
import Finder from "./components/Finder";
import Trending from "./components/Trending";

const theme = {
  colors: {
    random: "#F0477F",
    finder: "#3bff96",
    trending: "#00d5ff",
    grey: "#353535",
    darkGrey: "#1C1C1C",
    black: "#000000",
  },
};

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalSyles />
      <Header />
      {width < breakpoint && <Nav />}
      <Routes>
        {width < breakpoint ? (
          <Route path="/" element={<MainMob />}>
            <Route index element={<Random />} />
            <Route path="finder" element={<Finder />} />
            <Route path="trending" element={<Trending />} />
          </Route>
        ) : (
          <Route path="/" element={<MainDesktop />}>
            <Route index element={<Random />} />
            <Route path="finder" element={<Finder />} />
            <Route path="trending" element={<Trending />} />
          </Route>
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
