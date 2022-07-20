import React from "react";
import { Outlet } from "react-router-dom";
import { StyledMainMobile } from "./styles/MainMobile.styled";

const MainMobile = () => {
  return (
    <StyledMainMobile>
      <Outlet />
    </StyledMainMobile>
  );
};

export default MainMobile;
