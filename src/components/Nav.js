import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./styles/Nav.styled";
import { FiTrendingUp, FiSearch, FiImage } from "react-icons/fi";
// import { FaRandom } from "react-icons/fa";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <FiImage className="random-svg" size="18px" />
      </Link>
      <Link to="/finder">
        <FiSearch className="search-svg" size="18px" />
      </Link>
      <Link to="/trending">
        <FiTrendingUp className="trending-svg" size="18px" />
      </Link>
    </StyledNav>
  );
};

export default Nav;
