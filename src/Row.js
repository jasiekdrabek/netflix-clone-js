import React, { useEffect, useState } from "react";
import axios from "./axios";
import ClickMovie from "./ClickMovie";
import "./Row.css";
import shuffleArray from "./shuffleArray";

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
          results = results.concat(request.data.results);
        }
      } else {
        request = await axios.get(fetchUrl);
        results = request.data.results;
      }
      results = shuffleArray(results);
      setMovies(results);
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (click) {
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
      {click && <ClickMovie movie={click} />}
    </div>
  );
}

export default Row;
