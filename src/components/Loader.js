import React from "react";
import { StyledLoader } from "../components/styles/Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loading">
        <p>loading</p>
        <span></span>
      </div>
    </StyledLoader>
  );
};

export default Loader;
