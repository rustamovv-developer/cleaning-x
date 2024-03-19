import React from "react";
import headerImg from "../../assets/images/header.png";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__left">
          <h2 className="header__title">Quality cleaning for your home</h2>
          <p className="header__text">
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="header__bottom">
            <button className="header__btn btn-primary">
              Get a free quote
            </button>
            <div className="header__card">
              <i class="fa-solid fa-phone header__icon"></i>
              <div className="header__exam">
                <p className="header__exam__text">Call us now</p>
                <h2 className="header__exam__title">(414) 567 - 2109</h2>
              </div>
            </div>
          </div>
        </div>
        <img src={headerImg} alt="header-img" className="header__img" />
      </div>
    </header>
  );
}

export default Header;
