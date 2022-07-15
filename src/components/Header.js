import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Image
          src={require("../assets/giphy-logo2.svg").default}
          alt="giphy logo"
        />
      </Link>
      <Link to="/">
        <h1>GIPHY</h1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
