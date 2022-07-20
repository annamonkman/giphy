import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "./Loader";
import { StyledRandom } from "./styles/Random.styled";
import { FaRandom } from "react-icons/fa";
import { FiImage } from "react-icons/fi";

const Random = () => {
  const [randomGifUrl, setRandomGifUrl] = useState([]);
  const [randomGifName, setRandomGifName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
      });
      const url = response.data.data.images.fixed_height.url;
      const name = response.data.data.title;
      setRandomGifUrl(url);
      setRandomGifName(name);
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
      const name = response.data.data.title;
      setRandomGifUrl(url);
      setRandomGifName(name);
      setLoading(false);
    };
    getData();
  }

  if (!randomGifUrl) return null;

  return (
    <div className="component">
      <StyledRandom>
        <div className="heading">
          <FiImage className="random-svg" size="30px" />
          <h1>Random</h1>
        </div>

        <div className="img-button">
          {loading ? (
            <Loader />
          ) : (
            <img src={randomGifUrl} alt={randomGifName}></img>
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
