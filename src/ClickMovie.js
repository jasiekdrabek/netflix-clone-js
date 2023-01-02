import React from 'react'
import "./Banner.css";

function ClickMovie({movie}) {
    function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    
    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          // @ts-ignore
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          
          <h1 className="banner__title">{movie?.
  // @ts-ignore
          name || movie?.title || movie?.original_name }</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <h1 className="description__content">
            <div
              id="description1"
              className="banner__description"
            >
              {truncate(
                // @ts-ignore
                movie?.overview,
                450
              )}
            </div>            
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
}

export default ClickMovie