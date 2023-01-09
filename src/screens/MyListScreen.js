import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import "./MyListScreen.css";
import Row from "../components/Row";

function MyListScreen() {
  return (
    <div className="myListScreen">
      <Nav />
      <Banner />
      <Row title={"Movies"} displayMyList={true} media_type={"movie"} />
      <Row title={"Tv series"} displayMyList={true} media_type={"tv"} />
    </div>
  );
}

export default MyListScreen;
