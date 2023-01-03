import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../Requests";
import requestTvSeriesGenres from "../RequestTvSeriesGenres";
import Row from "../Row";
import "./TvSeriesScreen.css";
import showItems from "../showItems";
import loadMore from "../loadMore";

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
  
if(records < requestTvSeriesGenres.length){
  loadMore(records, requestTvSeriesGenres, setHasMore, itemsPerPage,setrecords);
}
  return (
    <div className="tvSeriesScreen">
      <Nav />
      <Banner number={0} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals[0]}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending[0]} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated[0]} />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
      >
        {showItems(requestTvSeriesGenres, records)}
      </InfiniteScroll>
    </div>
  );
}

export default TvSeriesScreen;
