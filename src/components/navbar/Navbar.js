import React from "react";
import navImg from "../../assets/images/logo.png";
import "./nav.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <div className="nav__left">
            <img src={navImg} alt="logo" className="nav__img" />
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#articles" className="nav__link">
                  Articles
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__right">
            <p className="nav__text">Cart ( 0 )</p>
            <button className="btn-primary">Get a free quote</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
