// import React, { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalSyles from "./styles/index";
import Header from "./components/Header";
import Main2 from "./components/MainMob";
import Random from "./components/Random";
import Finder from "./components/Finder";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div>
      <GlobalSyles />
      <Header />
      <Routes>
        <Route path="/" element={<Main2 />}>
          <Route index element={<Random />} />
          <Route path="finder" element={<Finder />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
