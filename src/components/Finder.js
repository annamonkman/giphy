import React, { useEffect } from "react";
import axios from "axios";

import { StyledFinder } from "./styles/Finder.styled";
import { Input } from "semantic-ui-react";

const Finder = () => {
  const string = "hello";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}`, q: string },
      });
      console.log(">>>DATA", response);
    };
    getData();
  }, []);

  return (
    <div className="component">
      <StyledFinder>
        <h1>Finder</h1>
        <Input action="Search" placeholder="Search..." className="input" />
      </StyledFinder>
    </div>
  );
};

export default Finder;
