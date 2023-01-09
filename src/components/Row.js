import React, { useEffect, useState } from "react";
import axios from "axios";
import ClickMovie from "./ClickMovie";
import "./Row.css";
import shuffleArray from "../functions/shuffleArray";
import { useSelector } from "react-redux";
import {
  selectMovieList,
  selectRegion,
  selectWatchProvider,
} from "../functions/userSlice";
import { useHorizontalScroll } from "../functions/horizontalScroll";

function Row({
  title,
  genreId = null,
  sortBy = null,
  voteCount = null,
  media_type = "movie tv",
  query = "",
  displayGenres = false,
  displayMyList = false,
  displaySearch = false,
  searchFor = "",
}) {
  const scrollRef = useHorizontalScroll();
  const [movies, setMovies] = useState([]);
  const [click, setClick] = useState("");
  const watchProvider = useSelector(selectWatchProvider);
  const region = useSelector(selectRegion);
  const myList = useSelector(selectMovieList);

  useEffect(() => {
    async function fetchData() {
      var results = [];
      var ids = [];
      var request;
      var options;
      if (displayGenres) {
        if (watchProvider === null || region === null) {
          return;
        }
        options = {
          method: "GET",
          url: "https://api.themoviedb.org/3/discover/movie",
          params: {
            api_key: process.env.REACT_APP_API_KEY_TMDB,
            with_watch_providers: watchProvider.watchProviderId,
            watch_region: region.region,
          },
        };
        if (genreId != null) {
          options.params.with_genres = genreId;
        }
        if (sortBy != null) {
          options.params.sort_by = sortBy;
        }
        if (voteCount != null) {
          options.params.vote_count = voteCount;
        }
        if (media_type.includes("movie")) {
          request = await axios.request(options);
          var result = request.data.results;
          for (let j = 0; j < result.length; j++) {
            result[j].media_type = "movie";
            if (!ids.includes(result[j].id)) {
              results.push(result[j]);
              ids.push(result[j].id);
            }
          }
          const morePages = Math.min(4, request.data.total_pages);
          for (let i = 2; i <= morePages; i++) {
            options.params.page = i;
            request = await axios.request(options);
            result = request.data.results;
            for (let j = 0; j < result.length; j++) {
              result[j].media_type = "movie";
              if (!ids.includes(result[j].id)) {
                results.push(result[j]);
                ids.push(result[j].id);
              }
            }
          }
        }
        options.params.page = 1;
        if (media_type.includes("tv")) {
          options.url = "https://api.themoviedb.org/3/discover/tv";
          request = await axios.request(options);
          result = request.data.results;
          for (let j = 0; j < result.length; j++) {
            result[j].media_type = "tv";
            if (!ids.includes(result[j].id)) {
              results.push(result[j]);
              ids.push(result[j].id);
            }
          }
          const morePages = Math.min(4, request.data.total_pages);
          for (let i = 2; i <= morePages; i++) {
            options.params.page = i;
            request = await axios.request(options);
            result = request.data.results;
            for (let j = 0; j < result.length; j++) {
              result[j].media_type = "tv";
              if (!ids.includes(result[j].id)) {
                results.push(result[j]);
                ids.push(result[j].id);
              }
            }
          }
        }
        results = shuffleArray(results);
        setMovies(results);
        return;
      }
      if (displayMyList) {
        if (!myList) {
          return;
        }
        var moviesResult = [];
        const options = {
          method: "GET",
          params: {
            api_key: process.env.REACT_APP_API_KEY_TMDB,
          },
        };
        if (media_type.includes("movie")) {
          for (let i = 0; i < myList?.movieList?.length; i++) {
            options.url = `https://api.themoviedb.org/3/movie/${myList.movieList[i]}`;
            const request = await axios
              .request(options)
              .then()
              .catch((error) => console.log(error));
            if (request) {
              request.data.media_type = "movie";
              moviesResult.push(request.data);
            }
          }
        } else if (media_type.includes("tv")) {
          for (let i = 0; i < myList?.tvList?.length; i++) {
            options.url = `https://api.themoviedb.org/3/tv/${myList.tvList[i]}`;
            const request = await axios
              .request(options)
              .then()
              .catch((error) => console.log(error));
            if (request) {
              request.data.media_type = "tv";
              moviesResult.push(request.data);
            }
          }
        }
        // @ts-ignore
        setMovies(moviesResult);
        return;
      }
      if (displaySearch) {
        if (query === "" && searchFor === "") {
          return;
        }
        results = [];
        ids = [];
        options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/search/${searchFor}`,
          params: {
            api_key: process.env.REACT_APP_API_KEY_TMDB,
            query: query,
          },
        };
        request = await axios.request(options);
        if (searchFor === "movie" || searchFor === "tv") {
          result = request.data.results;
          for (let j = 0; j < result.length; j++) {
            result[j].media_type = media_type;
            if (!ids.includes(result[j].id)) {
              results.push(result[j]);
              ids.push(result[j].id);
            }
          }
          const morePages = Math.min(4, request.data.total_pages);
          for (let i = 2; i <= morePages; i++) {
            options.params.page = i;
            request = await axios.request(options);
            result = request.data.results;
            for (let j = 0; j < result.length; j++) {
              if (media_type != null) {
                result[j].media_type = media_type;
              }
              if (!ids.includes(result[j].id)) {
                results.push(result[j]);
                ids.push(result[j].id);
              }
            }
          }
          // @ts-ignore
          setMovies(results);
          return;
        }
        return;
      }
    }
    fetchData();
  }, [
    media_type,
    title,
    genreId,
    sortBy,
    voteCount,
    watchProvider,
    region,
    myList,
    displayGenres,
    displayMyList,
    searchFor,
    displaySearch,
    query,
  ]);
  
  const handleClick = (movie) => {
    if (movie.media_type != null) {
      if (click === movie) {
        setClick("");
      } else {
        setClick(movie);
      }
    }
  };

  return (
    <div className="row">
      {movies.length > 0 && <h2>{title}</h2>}
      <div
        className="row__posters"
        // @ts-ignore
        ref={scrollRef}
      >
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
