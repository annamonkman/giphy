import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader className="header">
      <Link to="/" className="header__link">
        <Image
          src={require("../assets/giphy-logo2.svg").default}
          alt="giphy logo"
          className="header__img"
        />
      </Link>
      <Link to="/" className="header__link">
        <h1 className="header__title">GIPHY</h1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
