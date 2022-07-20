import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./styles/Nav.styled";
import { FiTrendingUp, FiSearch, FiImage } from "react-icons/fi";

const Nav = () => {
  return (
    <StyledNav className="nav">
      <Link to="/" className="nav__link">
        <FiImage className="nav__icon nav__icon--random" size="18px" />
      </Link>
      <Link to="/finder" className="nav__link">
        <FiSearch className="nav__icon nav__icon--finder" size="18px" />
      </Link>
      <Link to="/trending" className="nav__link">
        <FiTrendingUp className="nav__icon nav__icon--trending" size="18px" />
      </Link>
    </StyledNav>
  );
};

export default Nav;
