import React, { useEffect, useState } from "react";
import axios from "../requests/axios";
import ClickMovie from "./ClickMovie";
import "./Row.css";
import shuffleArray from "../functions/shuffleArray";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [click, setClick] = useState("");
  useEffect(() => {
    async function fetchData() {
      if (Array.isArray(fetchUrl)) {
        var results = [];
        var request;
        for (let i = 0; i < fetchUrl.length; i++) {
          request = await axios.get(fetchUrl[i]);
          var result = request.data.results;
          for (let j = 0; j < result.length; j++) {
            if (fetchUrl[i].startsWith("/discover/movie")) {
              result[j].type = "Movie";
            } else {
              result[j].type = "Tv series";
            }
            results.push(result[j]);
          }
        }
      } else {
        request = await axios.get(fetchUrl);
        result = request.data.results;
        for (let j = 0; j < result.length; j++) {
          if (fetchUrl.startsWith("/discover/movie")) {
            result[j].type = "Movie";
          } else {
            result[j].type = "Tv series";
          }
        }
        results = request.data.results;
      }
      results = shuffleArray(results);
      setMovies(results);
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (click === movie) {
      setClick("");
    } else {
      setClick(movie);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            // @ts-ignore

            movie.backdrop_path &&
            // @ts-ignore
            movie.poster_path && (
              <img
                className={`row__poster `}
                // @ts-ignore
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={
                  // @ts-ignore
                  `https://image.tmdb.org/t/p/w300/` + movie.poster_path
                }
                alt=""
              />
            )
        )}
      </div>
      {click && <ClickMovie movie1={click} />}
    </div>
  );
}

export default Row;
