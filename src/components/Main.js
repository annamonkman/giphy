import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import Random from "./Random";
import Finder from "./Finder";
import Trending from "./Trending";
import { StyledMain } from "./styles/Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Random />
      <Finder />
      <Trending />
    </StyledMain>
  );
};

export default Main;
