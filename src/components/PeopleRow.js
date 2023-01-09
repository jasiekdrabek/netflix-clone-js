import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHorizontalScroll } from "../functions/horizontalScroll";
import "./PeopleRow.css";

function PeoleRow({ title, query = "" }) {
  const [people, setPeople] = useState([]);
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    async function fetchData() {
      var results = [];
      var request;
      var options;
      options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/person",
        params: {
          api_key: process.env.REACT_APP_API_KEY_TMDB,
          query: query,
        },
      };
      request = await axios.request(options);
      results = request.data.results;
      setPeople(results);
    }
    fetchData();
  }, [query]);

  return (
    <div className="peoplerow">
      {people.length > 0 && <h2>{title}</h2>}
      <div
        className="peoplerow__posters"
        // @ts-ignore
        ref={scrollRef}
      >
        {people.map(
          (person) =>
            // @ts-ignore
            person.profile_path && (
              <img
                className={`peoplerow__poster `}
                // @ts-ignore
                key={person.id}
                src={
                  // @ts-ignore
                  `https://image.tmdb.org/t/p/w300/` + person.profile_path
                }
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default PeoleRow;
