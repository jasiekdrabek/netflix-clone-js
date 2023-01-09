import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requests from "../requests/Requests";
import requestTvSeriesGenres from "../requests/RequestTvSeriesGenres";
import Row from "../components/Row";
import "./TvSeriesScreen.css";
import showItems from "../functions/showItems";
import loadMore from "../functions/loadMore";

function TvSeriesScreen() {
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

  if (records < requestTvSeriesGenres.length) {
    loadMore(
      records,
      requestTvSeriesGenres,
      setHasMore,
      itemsPerPage,
      setrecords
    );
  }

  return (
    <div className="tvSeriesScreen">
      <Nav />
      <Banner number={0} />
      <Row title="TRENDING" displayGenres={true} media_type="tv" />
      <Row
        title="TOP RATED"
        displayGenres={true}
        // @ts-ignore
        sortBy={requests.fetchTopRated.sort_by}
        // @ts-ignore
        voteCount={requests.fetchTopRated["vote_count.gte"]}
        media_type="tv"
      />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
      >
        {showItems(requestTvSeriesGenres, records, "tv")}
      </InfiniteScroll>
    </div>
  );
}

export default TvSeriesScreen;
