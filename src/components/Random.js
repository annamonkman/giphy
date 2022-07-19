import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "./Loader";
import { StyledRandom } from "./styles/Random.styled";
import { FaRandom } from "react-icons/fa";

const Random = () => {
  const [randomGifUrl, setRandomGifUrl] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
      });
      const url = response.data.data.images.fixed_height.url;
      setRandomGifUrl(url);
      setLoading(false);
    };
    getData();
  }, []);

  function handleNewGif() {
    const getData = async () => {
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
      });
      const url = response.data.data.images.fixed_height.url;
      setRandomGifUrl(url);
    };
    getData();
  }

  if (!randomGifUrl) return null;

  return (
    <div className="component">
      <StyledRandom>
        <h1>Random</h1>
        <div className="img-button">
          {loading ? (
            <Loader />
          ) : (
            <img
              src={randomGifUrl}
              alt="random gif NAME<<<<<<<<<<<<<<<<<<<<<<"
            ></img>
          )}
          <button onClick={handleNewGif} aria-label="generate random gif">
            <FaRandom size="20px" />
          </button>
        </div>
      </StyledRandom>
    </div>
  );
};

export default Random;
