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
  const [placeholderGifs, setPlaceholderGifs] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
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

  useEffect(() => {
    const getPlaceholderData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/search",
          {
            params: {
              api_key: `${process.env.REACT_APP_GIPHY_KEY}`,
              q: "search",
            },
          }
        );
        const gifs = response.data.data;
        setPlaceholderGifs(gifs);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };
    getPlaceholderData();
  }, []);

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

        <div className="form">
          <input
            className="form__input"
            type="search"
            name="search"
            placeholder="Search all GIFs"
            onChange={(event) => {
              console.log("search term", event.target.value);
              setSearchTerm(event.target.value);
            }}
          />
          <button
            onClick={getData}
            aria-label="Search gifs"
            className="form__btn"
          >
            <FiSearch size="25px" />
          </button>
        </div>

        <div className="content">
          {searchedGifs.length === 0 && (
            <p className="content__no-results">
              No results, Try another search
            </p>
          )}
          {searchTerm === "" ? (
            <>
              {error && <Error />}
              {loading ? (
                <Loader />
              ) : (
                <div className="content__gallery">
                  {placeholderGifs.map((gif) => (
                    <img
                      src={gif.images.fixed_height.url}
                      alt={gif.title}
                      className="content__gallery__img"
                    ></img>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {error && <Error />}
              {loading ? (
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
            </>
          )}
        </div>
      </StyledFinder>
    </div>
  );
};

export default Finder;
