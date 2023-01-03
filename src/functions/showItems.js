import React from "react";
import Row from "../components/Row";

const showItems = (shuffleRequestGenres, records) => {
  var items = [];
  for (var i = 0; i < Math.min(records, shuffleRequestGenres.length); i++) {
    items.push(
      <Row
        key={i}
        title={shuffleRequestGenres[i].Name}
        fetchUrl={shuffleRequestGenres[i].Url}
      />
    );
  }
  return items;
};

export default showItems;
