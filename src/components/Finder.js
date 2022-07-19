import React, { useState, useCallback } from "react";
import axios from "axios";

import { StyledFinder } from "./styles/Finder.styled";
import { FiSearch } from "react-icons/fi";
import Loader from "./Loader";

const Finder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchedGifs, setSearchedGifs] = useState([]);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: `${process.env.REACT_APP_GIPHY_KEY}`,
        q: searchTerm,
      },
    });
    const gifs = response.data.data;
    setSearchedGifs(gifs);
    setLoading(false);
  }, [searchTerm]);

  return (
    <div className="component">
      <StyledFinder>
        <h1>Finder</h1>
        <div className="input-button">
          <input
            type="search"
            name="search"
            placeholder="Search all GIFs"
            onChange={(event) => {
              console.log("search term", event.target.value);
              setSearchTerm(event.target.value);
            }}
          />
          <button onClick={getData} aria-label="Search gifs">
            <FiSearch size="25px" />
          </button>
        </div>
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div className="search-gallery">
              {searchedGifs.map((gif) => (
                <img src={gif.images.fixed_height.url} alt="gif"></img>
              ))}
            </div>
          )}
        </div>
      </StyledFinder>
    </div>
  );
};

export default Finder;
