import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import db, { auth } from "../firebase";
import { getMovieList, selectMovieList } from "../functions/userSlice";
import "./Banner.css";

function ClickMovie({ movie1 }) {
  const dispatch = useDispatch();
  var myList = useSelector(selectMovieList);
  const [myListButton, setMyList] = useState(true);
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movie1);
  }, [movie1]);

  useEffect(() => {
    if (
      myList.movieList?.includes(movie1.id) ||
      myList.tvList?.includes(movie1.id)
    ) {
      setMyList(false);
    } else {
      setMyList(true);
    }
  }, [myList, movie1]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function buttonClick() {
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
          <button className="banner__button" onClick={buttonMyList}>
            {myListButton ? "Add to My list" : "Remove from my list"}
          </button>
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
