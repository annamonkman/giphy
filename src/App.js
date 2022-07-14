// import React, { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalSyles from "./styles/index";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainMob from "./components/MainMob";
import Random from "./components/Random";
import Finder from "./components/Finder";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div>
      <GlobalSyles />
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<MainMob />}>
          <Route index element={<Random />} />
          <Route path="finder" element={<Finder />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
