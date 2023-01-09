import React from "react";
import Row from "../components/Row";

const showItems = (shuffleRequestGenres, records, type) => {
  var items = [];
  for (var i = 0; i < Math.min(records, shuffleRequestGenres.length); i++) {
    items.push(
      <Row
        key={i}
        media_type={type}
        title={shuffleRequestGenres[i].name}
        genreId={shuffleRequestGenres[i].genreId}
        displayGenres={true}
      />
    );
  }
  return items;
};

export default showItems;
