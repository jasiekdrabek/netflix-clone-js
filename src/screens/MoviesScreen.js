import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requestMovieGenres from "../requests/RequestMoviesGenres";
import requests from "../requests/Requests";
import Row from "../components/Row";
import showItems from "../functions/showItems";
import "./MoviesScreen.css";
import loadMore from "../functions/loadMore";

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
        title="TRENDING"
        displayGenres={true}
        // @ts-ignore
        sortBy={requests.fetchTrending.sort_by}
        media_type="movie"
      />
      <Row
        title="TOP RATED"
        displayGenres={true}
        // @ts-ignore
        sortBy={requests.fetchTopRated.sort_by}
        // @ts-ignore
        voteCount={requests.fetchTopRated["vote_count.gte"]}
        media_type="movie"
      />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
      >
        {showItems(requestMovieGenres, records, "movie")}
      </InfiniteScroll>
    </div>
  );
}

export default MoviesScreen;
