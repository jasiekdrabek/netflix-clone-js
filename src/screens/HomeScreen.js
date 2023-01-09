import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import requests from "../requests/Requests";
import Row from "../components/Row";
import requestGenres from "../requests/RequestGenres";
import InfiniteScroll from "react-infinite-scroller";
import showItems from "../functions/showItems";
import loadMore from "../functions/loadMore";

function HomeScreen() {
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

  if (records < requestGenres.length) {
    loadMore(records, requestGenres, setHasMore, itemsPerPage, setrecords);
  }

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="TRENDING"
        displayGenres={true}
        // @ts-ignore
        sortBy={requests.fetchTrending.sort_by}
      />
      <Row
        title="TOP RATED"
        displayGenres={true}
        // @ts-ignore
        sortBy={requests.fetchTopRated.sort_by}
        // @ts-ignore
        voteCount={requests.fetchTopRated["vote_count.gte"]}
      />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
      >
        {showItems(requestGenres, records)}
      </InfiniteScroll>
    </div>
  );
}

export default HomeScreen;
