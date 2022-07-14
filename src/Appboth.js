import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import GlobalSyles from "./styles/index";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Random from "./components/Random";
import Finder from "./components/Finder";
import Trending from "./components/Trending";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width <= breakpoint) {
    return (
      <div>
        <GlobalSyles />
        <Header />
        <Nav />
        <Routes>
          <Route index element={<Random />} />
          <Route path="finder" element={<Finder />} />
          <Route path="trending" element={<Trending />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <GlobalSyles />
        <Routes>
          <Header />
          <Route path="/" element={<Main />}>
            <Route index element={<Random />} />
            <Route path="finder" element={<Finder />} />
            <Route path="trending" element={<Trending />} />
          </Route>
        </Routes>
      </div>
    );
  }
};

export default App;
