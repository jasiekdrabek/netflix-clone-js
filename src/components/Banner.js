import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieList,
  selectMovieList,
  selectRegion,
  selectWatchProvider,
} from "../functions/userSlice";
import db, { auth } from "../firebase";

function Banner({ number = 0 }) {
  const dispatch = useDispatch();
  const myList = useSelector(selectMovieList);
  const navigate = useNavigate();
  const [myListButton, setMyList] = useState(true);
  const [movie, setMovie] = useState([]);
  const watchProvider = useSelector(selectWatchProvider);
  const region = useSelector(selectRegion);

  useEffect(() => {
    if (watchProvider === null || number === null || region === null) {
      return;
    }
    var result;
    async function fetchData() {
      var url;
      if (number === 0) {
        url = "https://api.themoviedb.org/3/discover/tv";
      } else if (number === 1) {
        url = "https://api.themoviedb.org/3/discover/movie";
      }
      const options = {
        method: "GET",
        url: url,
        params: {
          api_key: process.env.REACT_APP_API_KEY_TMDB,
          language: "en-US",
          with_watch_providers: watchProvider.Id,
          watch_region: region,
        },
      };
      const request = await axios.request(options);
      result =
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ];
      if (number === 0) {
        result.media_type = "tv";
      } else {
        result.media_type = "movie";
      }
      setMovie(result);
      if (result.backdrop_path == null) {
        setMovie(request.data.results[0]);
      }
      return request;
    }
    fetchData();
  }, [watchProvider, number, region]);

  useEffect(() => {    
    if (
      // @ts-ignore
      myList?.movieList?.includes(movie.id) ||
      // @ts-ignore
      myList?.tvList?.includes(movie.id)
    ) {
      setMyList(false);
    } else {
      setMyList(true);
    }
  }, [myList, movie]);

  var buttonDescription = document.getElementById("description-button");
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function buttonPlay() {
    navigate(`/play/`, { state: movie });
  }

  function buttonMyList() {
    setMyList(!myListButton);
    var newList = [];
    // @ts-ignore
    if (movie.media_type === "movie") {
      for (let i = 0; i < myList?.movieList?.length; i++) {
        newList.push(myList.movieList[i]);
      }
    } else {
      for (let i = 0; i < myList?.tvList?.length; i++) {
        newList.push(myList.tvList[i]);
      }
    }
    if (myListButton) {
      // @ts-ignore
      newList.push(movie.id);
    } else {
      for (var i = 0; i < newList.length; i++) {
        // @ts-ignore
        if (newList[i] === movie.id) {
          newList.splice(i, 1);
          break;
        }
      }
    }
    // @ts-ignore
    if (movie.media_type === "movie") {
      dispatch(getMovieList({ movieList: newList, tvList: myList.tvList }));
      db.collection("User Movies list")
        .doc(auth.currentUser?.uid)
        .update({ movieList: newList });
    } else {
      dispatch(getMovieList({ tvList: newList, movieList: myList.movieList }));
      db.collection("User Movies list")
        .doc(auth.currentUser?.uid)
        .update({ tvList: newList });
    }
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
          <button className="banner__button" onClick={buttonPlay}>
            Play
          </button>

          <button className="banner__button" onClick={buttonMyList}>
            {myListButton ? "Add to My list" : "Remove from my list"}
          </button>
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
