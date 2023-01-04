import "./PlayScreen.css";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import YouTube from "react-youtube";
import axios from "../requests/axios";
import requests from "../requests/Requests";
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
      var requestMovie;
      if (movie.type === "Movie") {
        requestMovie = await axios
          .get(requests.getTrailer[0] + movie.id + requests.getTrailer[2])
          .catch((error) => console.error(error.message));
      } else {
        requestMovie = await axios
          .get(requests.getTrailer[1] + movie.id + requests.getTrailer[2])
          .catch((error) => console.error(error.message));
      }
      for (let i = 0; i < requestMovie?.data.results.length; i++) {
        if (
          requestMovie?.data.results[i].type
            .toUpperCase()
            .includes("TRAILER") ||
          requestMovie?.data.results[i].name.toUpperCase().includes("TRAILER")
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
      <YouTube className="yt__video" videoId={TrailerUrl} opts={opts} />
      <div className="magic__link">
        <a
          className="magic__link"
          href={`https://movgotv.unblockit.pet/?s=${
            movie?.name || movie?.title || movie?.original_name
          }`}
        >
          Magick Link1
        </a>
        <a
          className="magic__link"
          href={`https://putlocker.unblockit.pet/search/${
            movie?.name || movie?.title || movie?.original_name
          }`}
        >
          Magic Link2
        </a>
        <a
          className="magic__link"
          href={`https://animeseries.unblockit.pet/search?keyword=${
            movie?.name || movie?.title || movie?.original_name
          }`}
        >
          Magic Link3
        </a>
      </div>
    </div>
  );
}

export default PlayScreen;
