import React from "react";
import logo from "../../assets/images/logo.svg";
import menuOpen from "../../assets/images/icon-menu.svg";
import menuClose from "../../assets/images/icon-menu-close.svg";
import "./NavBar.css";

export default function NavBar({ handleOverlay, isOpen, setIsOpen, width }) {
  function toggleMenu() {
    setIsOpen((prev) => !prev);
    handleOverlay();
  }
  return (
    <div className="navbar">
      <img src={logo} className="nav-logo" alt="logo" />

      <div className="menu">
        {!isOpen && (
          <div className="menu-button">
            <img
              src={menuOpen}
              alt="hamburger-menu"
              className="menu-icon"
              onClick={toggleMenu}
            ></img>
          </div>
        )}
        {(isOpen || width > 600) && (
          <div className="menu-wrapper">
            <div className="menu-open">
              {width < 600 && (
                <img
                  src={menuClose}
                  alt="close-icon"
                  className="menu-close"
                  onClick={toggleMenu}
                ></img>
              )}
              <nav className={width < 600 ? "menu-list-mobile" : "menu-list"}>
                <a href="" className="menu-item">
                  Home
                </a>
                <a href="" className="menu-item">
                  New
                </a>
                <a href="" className="menu-item">
                  Popular
                </a>
                <a href="" className="menu-item">
                  Trending
                </a>
                <a href="" className="menu-item">
                  Categories
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
