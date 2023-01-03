import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);
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

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={logoClick}
          className="nav__logo nav__element"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <h2 className="nav__element nav__hidden" onClick={movieClick}>
          MOVIES
        </h2>
        <h2 className="nav__element nav__hidden" onClick={tvClick}>
          TV SERIES
        </h2>
        <img
          className="nav__avatar nav__element"
          src="https://i.pinimg.com/564x/19/b9/dd/19b9dde17c93c1dfe153e5c8ed7be575.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
