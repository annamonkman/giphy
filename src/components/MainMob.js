import React from "react";
import { Outlet } from "react-router-dom";
import { StyledMain } from "./styles/Main.styled";

const MainMob = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
};

export default MainMob;
