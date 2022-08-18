import React, { useState, useEffect } from "react";
import axios from "axios";

import Error from "./Error";
import { StyledFinder } from "./styles/Finder.styled";
import { FiSearch } from "react-icons/fi";
import Loader from "./Loader";

const Finder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchedGifs, setSearchedGifs] = useState([]);
  const [error, setError] = useState(false);

  // ! --------------------------------------GET DATA

  useEffect(() => {
    setLoading(false);
  }, []);

  const fetchData = async (event) => {
    event.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: `${process.env.REACT_APP_GIPHY_KEY}`,
          q: searchTerm,
        },
      });
      const gifs = response.data.data;
      setSearchedGifs(gifs);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  // ! -------------------------------------- RETURN

  return (
    <div className="component">
      <StyledFinder>
        <div className="component__heading">
          <FiSearch
            className="component__heading__icon component__heading__icon--finder"
            size="30px"
          />
          <h2 className="component__heading__text">Finder</h2>
        </div>

        <form className="form" onSubmit={fetchData}>
          <input
            className="form__input"
            type="search"
            name="search"
            placeholder="Search all GIFs"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button
            onClick={fetchData}
            aria-label="Search gifs"
            className="form__btn"
          >
            <FiSearch size="25px" />
          </button>
        </form>

        <div className="content">
          {!searchedGifs ? (
            <p>Search Gifs</p>
          ) : error ? (
            <Error />
          ) : loading ? (
            <Loader />
          ) : (
            <div className="content__gallery">
              {searchedGifs.map((gif) => (
                <img
                  src={gif.images.fixed_height.url}
                  alt={gif.title}
                  className="content__gallery__img"
                ></img>
              ))}
            </div>
          )}
        </div>
      </StyledFinder>
    </div>
  );
};

export default Finder;
