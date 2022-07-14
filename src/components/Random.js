import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledRandom } from "./styles/Random.styled";
import { FiRefreshCcw } from "react-icons/fi";

const Random = () => {
  const [randomGif, setRandomGif] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
      });
      console.log(">>>DATA", response);
      const gif = response.data.data;
      const url = response.data.data.images.fixed_height.url;
      setRandomGif(url);
      console.log("gif url", gif.images.fixed_height.url);
    };
    getData();
  }, []);

  if (!randomGif) return null;

  return (
    <div className="component">
      <StyledRandom>
        <h1>Random</h1>
        <div className="img-button">
          <img src={randomGif} alt="elephant"></img>
          <button>
            <FiRefreshCcw />
          </button>
        </div>
      </StyledRandom>
    </div>
  );
};

export default Random;
