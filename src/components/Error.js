import React from "react";
import { StyledError } from "./styles/Error.styled";

const Error = () => {
  return (
    <StyledError>
      <p className="error__message">Error: Unable to get GIFs</p>
    </StyledError>
  );
};

export default Error;
