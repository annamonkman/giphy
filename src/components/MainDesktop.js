import React from "react";

import Random from "./Random";
import Finder from "./Finder";
import Trending from "./Trending";
import { StyledMainDesktop } from "./styles/MainDesktop.styled";

const MainDesktop = () => {
  return (
    <StyledMainDesktop>
      <Random />
      <Finder />
      <Trending />
    </StyledMainDesktop>
  );
};

export default MainDesktop;
