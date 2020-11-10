import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [hideState, setHideState] = useState(false);

  const menuStateChanger = () => {
    if (hideState === false) {
      setHideState(true);
    }
    if (hideState === true) {
      setHideState(false);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link className="link" to="/">
          <h1>ThinkDesign</h1>
        </Link>
      </div>
      <div
        className={hideState ? "navbar__hamburgerChanged" : "navbar__hamburger"}
        onClick={menuStateChanger}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
      <div className={hideState ? "navbar__menu" : "navbar__menuHidden"}>
        <div className="menu__content">
          <Link className="link" to="/" onClick={menuStateChanger}>
            <div className="navTile aboutPage">About Me</div>
          </Link>
          <Link className="link" to="/portfolio" onClick={menuStateChanger}>
            <div className="navTile aboutPage">Portfolio</div>
          </Link>
          <Link className="link" to="/contact" onClick={menuStateChanger}>
            <div className="navTile aboutPage">Contact Me</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
