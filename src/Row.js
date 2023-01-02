import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import shuffleArray from "./shuffleArray";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (Array.isArray(fetchUrl)) {
        var results = [];
        var request;
        for (let i = 0; i < fetchUrl.length; i++) {
          request = await axios.get(fetchUrl[i]);
          results = results.concat(request.data.results);
        }
      }else{
        request = await axios.get(fetchUrl);
        results = request.data.results;
      }
      results = shuffleArray(results);
      setMovies(results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            // @ts-ignore
            ((isLargeRow && movie.poster_path) ||
              // @ts-ignore
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                // @ts-ignore
                key={movie.id}
                src={
                  isLargeRow
                    ? // @ts-ignore
                      `https://image.tmdb.org/t/p/w342/` + movie.poster_path
                    : // @ts-ignore
                      `https://image.tmdb.org/t/p/w300/` + movie.backdrop_path
                }
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
