import React from "react";
import { Outlet } from "react-router-dom";

// import Random from "./Random";
// import Finder from "./Finder";
// import Trending from "./Trending";
import { StyledMain } from "./styles/Main.styled";

const MainMob = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
};

export default MainMob;
