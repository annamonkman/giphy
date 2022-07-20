import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "./Loader";
import Error from "./Error";
import { StyledTrending } from "./styles/Trending.styled";
import { FiTrendingUp } from "react-icons/fi";

const Trending = () => {
  const [loading, setLoading] = useState(true);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/trending",
          {
            params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
          }
        );
        const gifs = response.data.data;
        setTrendingGifs(gifs);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="component">
      <StyledTrending>
        <div className="component__heading">
          <FiTrendingUp
            className="component__heading__icon component__heading__icon--trending"
            size="30px"
          />
          <h2 className="component__heading__text">Trending</h2>
        </div>
        <div className="content">
          {error && <Error />}
          {loading ? (
            <Loader />
          ) : (
            <div className="content__gallery">
              {trendingGifs.map((gif) => (
                <img
                  src={gif.images.fixed_height.url}
                  alt="gif"
                  className="content__gallery__img"
                ></img>
              ))}
            </div>
          )}
        </div>
      </StyledTrending>
    </div>
  );
};

export default Trending;
