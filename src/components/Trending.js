import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledTrending } from "./styles/Trending.styled";

const Trending = () => {
  const [loading, setLoading] = useState(true);
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending",
        {
          params: { api_key: `${process.env.REACT_APP_GIPHY_KEY}` },
        }
      );
      const gifs = response.data.data;
      setTrendingGifs(gifs);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="component">
      <StyledTrending>
        <h1>Trending</h1>
        <div>
          {loading ? (
            <div>loading...</div>
          ) : (
            <div className="trending-gallery">
              {trendingGifs.map((gif) => (
                <img src={gif.images.fixed_height.url} alt="gif"></img>
              ))}
            </div>
          )}
        </div>
      </StyledTrending>
    </div>
  );
};

export default Trending;
