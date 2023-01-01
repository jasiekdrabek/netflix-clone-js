import React from "react";
import "./Banner.css";

function Banner() {
  var buttonDescription = document.getElementById("description-button");
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string  ;
  }
  function buttonDescriptionClick() {
    buttonDescription = document.getElementById("description-button");
    var description = document.getElementById("description");
    if (buttonDescription?.textContent === "see more") {
      buttonDescription.textContent = "see less";
      description.textContent = `DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
      DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
      DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
      DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
      DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
       DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
       DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
       DescriptonDescriptonDescripton`;
    } else {
      if (buttonDescription) {
        buttonDescription.textContent = "see more";
        description.textContent = truncate(
          `DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
            DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
            DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
            DescriptonDescriptonDescripton`,
          150
        );
      }
    }
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://assets.vogue.in/photos/627cb0eaecb3436d3f16f9fe/16:9/w_1280,c_limit/netflix-series-2019-roster-1.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Movie name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="description__content">
          <div id="description" className="banner__description" onClick={buttonDescriptionClick}>
            {truncate(
              `DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
              DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
              DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
              DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
              DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
               DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
               DescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescriptonDescripton
               DescriptonDescriptonDescripton`,
              150
            )}
          </div>
          <button
            className="button__description"
            onClick={buttonDescriptionClick}
            id="description-button"
          >
          </button>
        </h1>
        
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
