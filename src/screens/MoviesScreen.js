import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Banner from "../Banner";
import Nav from "../Nav";
import requestMovieGenres from "../RequestMoviesGenres";
import requests from "../Requests";
import Row from "../Row";
import showItems from "../showItems";
import "./MoviesScreen.css";
import loadMore from "../loadMore";

function MoviesScreen() {
  const [, handleShow] = useState(false);
  const showMore = () => {
    var limit = [
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    ];

    if (window.scrollY >= limit[0] - limit[2] - 300) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showMore);

    return () => {
      window.addEventListener("scroll", showMore);
    };
  }, []);
  const itemsPerPage = 2;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);

  if (records < requestMovieGenres.length) {
    loadMore(records, requestMovieGenres, setHasMore, itemsPerPage, setrecords);
  }
  return (
    <div className="moviesScreen">
      <Nav />
      <Banner number={1} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals[1]}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending[1]} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated[1]} />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
      >
        {showItems(requestMovieGenres, records)}
      </InfiniteScroll>
    </div>
  );
}

export default MoviesScreen;
