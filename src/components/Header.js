import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Image } from "semantic-ui-react";

const Header = () => {
  return (
    <StyledHeader>
      <Image
        src={require("../assets/giphy-logo2.svg").default}
        alt="giphy logo"
      />
      <h1>GIPHY</h1>
    </StyledHeader>
  );
};

export default Header;
