import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";
import requestGenres from "./RequestGenres";
import InfiniteScroll from "react-infinite-scroller";

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

    if (window.scrollY >= (limit[0] - limit[2] -300)) {
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
  const showItems = (shuffleRequestGenres) => {
    var items = [];
    for (var i = 0; i < Math.min(records,shuffleRequestGenres.length); i++) {
      items.push(
        <Row
          title={shuffleRequestGenres[i].Name}
          fetchUrl={shuffleRequestGenres[i].Url}
        />
      );
    }
    return items;
  };
  const itemsPerPage = 6;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);
  const loadMore = () => {
    if (records >= requestGenres.length ) {
      setHasMore(false);
    } else {
      var limit = [
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      ];
      if (window.scrollY >= (limit[0] - limit[2] -300)) {
        setTimeout(() => {
          setrecords(records + itemsPerPage);
        }, 1000);
      }
    }
  };

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
      >
        {showItems(requestGenres)}
      </InfiniteScroll>
    </div>
  );
}

export default HomeScreen;
