import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      var results = request.data.results;
      setMovies(results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
            // @ts-ignore
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))&&(
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            // @ts-ignore
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow
                ? // @ts-ignore
                  movie.poster_path
                : // @ts-ignore
                  movie.backdrop_path
            }`}
            alt=""
          />
          )
        ))}
      </div>
    </div>
  );
}

export default Row;
