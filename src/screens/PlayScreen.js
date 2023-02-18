import "./PlayScreen.css";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import YouTube from "react-youtube";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function PlayScreen() {
  const location = useLocation();
  let movie = location?.state;
  const [TrailerUrl, setTrailerUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    var result;
    if (movie === null) {
      return;
    }
    async function fetchData() {
      var url = "https://api.themoviedb.org/3/";
      if (movie.media_type === "movie") {
        url += `movie/${movie.id}/videos`;
      } else {
        url += `tv/${movie.id}/videos`;
      }
      const options = {
        method: "GET",
        url: url,
        params: {
          api_key: process.env.REACT_APP_API_KEY_TMDB,
        },
      };
      const requestMovie = await axios.request(options);
      for (let i = 0; i < requestMovie?.data.results.length; i++) {
        if (
          requestMovie?.data.results[i].type.toUpperCase().includes("TRAILER")
        ) {
          result = requestMovie?.data.results[i].key;
          setTrailerUrl(result);
          return requestMovie;
        }
      }
      setTrailerUrl("");
      // eslint-disable-next-line
      movie = null;
      navigate(-1);
      return requestMovie;
    }
    fetchData();
  }, [movie]);

  const opts = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="playScreen">
      <Nav />
      <YouTube className="playScreen__video" videoId={TrailerUrl} opts={opts} />
    </div>
  );
}

export default PlayScreen;
