import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { selectAvatar } from "../functions/userSlice";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [show, handleShow] = useState(false);
  const avatar = useSelector(selectAvatar);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const transitonNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitonNavBar);

    return () => {
      window.addEventListener("scroll", transitonNavBar);
    };
  }, []);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  function logoClick() {
    goToTop();
    navigate("/");
  }

  function movieClick() {
    goToTop();
    navigate("/movie");
  }

  function tvClick() {
    goToTop();
    navigate("/tv");
  }

  function profileClicik() {
    goToTop();
    navigate("/profile");
  }

  function myListClick() {
    goToTop();
    navigate("/myList");
  }

  const searchClick = (e) => {
    e.preventDefault();
    goToTop();
    // @ts-ignore
    navigate("/search", { state: searchRef.current?.value });
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={logoClick}
          className="nav__logo nav__element"
          src={
            
            "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          }
          alt=""
        />
        <h2 className="nav__element nav__h2" onClick={movieClick}>
          MOVIES
        </h2>
        <h2 className="nav__element nav__h2" onClick={tvClick}>
          TV SERIES
        </h2>
        <form className="nav__element">
          <input
            ref={searchRef}
            placeholder="search"
            className="nav__searchbar"
          ></input>
          <button className="nav__dropdownbutton" onClick={searchClick}>
            Search
          </button>
        </form>
        <div className="nav__dropdown">
          <img
            className="nav__avatar nav__element"
            src={avatar?.avatar}
            alt=""
          />
          <div className="nav__dropdownContent">
            <button className="nav__dropdownbutton" onClick={profileClicik}>
              Profile
            </button>
            <button className="nav__dropdownbutton" onClick={myListClick}>
              My list
            </button>
            <button className="nav__dropdownbutton" onClick={logout}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
