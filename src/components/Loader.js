import React from "react";
import { StyledLoader } from "../components/styles/Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loader">
        <p className="loader__text">loading</p>
        <span className="loader__bar"></span>
      </div>
    </StyledLoader>
  );
};

export default Loader;
