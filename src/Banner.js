import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  var result;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals[0]);
      result =
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ];
      setMovie(result);
      if (result.backdrop_path == null) {
        setMovie(request.data.results[0]);
      }
      return request;
    }
    fetchData();
  }, []);
  var buttonDescription = document.getElementById("description-button");
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  function buttonDescriptionClick() {
    buttonDescription = document.getElementById("description-button");
    var description = document.getElementById("description");
    if (buttonDescription?.textContent === "see more") {
      buttonDescription.textContent = "see less";
      // @ts-ignore
      description.textContent = movie.overview;
    } else {
      if (buttonDescription) {
        buttonDescription.textContent = "see more";
        // @ts-ignore
        description.textContent = truncate(
          // @ts-ignore
          movie.overview,
          150
        );
      }
    }
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // @ts-ignore
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {
            // @ts-ignore
            movie?.name ||
              // @ts-ignore
              movie?.title ||
              // @ts-ignore
              movie?.original_name
          }
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="description__content">
          <div
            id="description"
            className="banner__description"
            onClick={buttonDescriptionClick}
          >
            {truncate(
              // @ts-ignore
              movie?.overview,
              150
            )}
          </div>
          <button
            className="button__description"
            onClick={buttonDescriptionClick}
            id="description-button"
          >
            see more
          </button>
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
