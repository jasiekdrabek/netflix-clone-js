import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import PeoleRow from "../components/PeopleRow";
import Row from "../components/Row";

function SearchSrceen() {
  const location = useLocation();
  const query = location?.state;
  
  return (
    <div className="searchScreen">
      <Nav />
      <Banner />
      <h1>Results do not include the filter watch provider and region</h1>
      <Row
        title={"Movies"}
        query={query}
        searchFor={"movie"}
        displaySearch={true}
        media_type={"movie"}
      />
      <Row
        title={"Tv series"}
        query={query}
        searchFor={"tv"}
        displaySearch={true}
        media_type={"tv"}
      />
      <PeoleRow title={"People"} query={query} />
    </div>
  );
}

export default SearchSrceen;
