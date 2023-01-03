import React, { useEffect, useState } from "react";
import "./Banner.css";

function ClickMovie({ movie1 }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movie1);
  }, [movie1]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function buttonClick() {}

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
          <button className="banner__button" onClick={buttonClick}>
            Play
          </button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="description__content">
          <div id="description1" className="banner__description">
            {truncate(
              // @ts-ignore
              movie?.overview,
              450
            )}
          </div>
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default ClickMovie;
