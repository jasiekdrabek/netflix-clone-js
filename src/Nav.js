import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
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

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/564x/19/b9/dd/19b9dde17c93c1dfe153e5c8ed7be575.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
