import React, { useEffect, useState } from "react";
import axios from "axios";

import Error from "./Error";
import Loader from "./Loader";
import { StyledRandom } from "./styles/Random.styled";
import { FaRandom } from "react-icons/fa";
import { FiImage } from "react-icons/fi";

const Random = () => {
  const [randomGifUrl, setRandomGifUrl] = useState([]);
  const [randomGifName, setRandomGifName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/random",
          {
            params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
          }
        );
        const url = response.data.data.images.fixed_height.url;
        const name = response.data.data.title;
        setRandomGifUrl(url);
        setRandomGifName(name);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  function handleNewGif() {
    const getData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/random",
          {
            params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
          }
        );
        const url = response.data.data.images.fixed_height.url;
        const name = response.data.data.title;
        setRandomGifUrl(url);
        setRandomGifName(name);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }

  if (!randomGifUrl) return null;

  return (
    <div className="component">
      <StyledRandom>
        <div className="component__heading">
          <FiImage
            className="component__heading__icon component__heading__icon--random"
            size="30px"
          />
          <h2 className="component__heading__text">Random</h2>
        </div>

        <div className="random">
          {error && <Error />}
          {loading ? (
            <Loader />
          ) : (
            <img
              src={randomGifUrl}
              alt={randomGifName}
              className="random__img"
            ></img>
          )}
          <button
            onClick={handleNewGif}
            aria-label="generate random gif"
            className="random__btn"
          >
            <FaRandom size="20px" className="random__btn__icon" />
          </button>
        </div>
      </StyledRandom>
    </div>
  );
};

export default Random;
