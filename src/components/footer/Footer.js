import React from "react";
import footerImg from "../../assets/images/logo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__card">
            <h2 className="footer__title">Quality cleaning for your home</h2>
            <p className="footer__text">
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3 h3">Contact us</h3>
            <p className="footer__text">
              1827 Nickel Road, Los Angeles, CA, 90017, United States
            </p>
            <p className="footer__text">(414) 567 - 2109</p>
            <p className="footer__text">contact@cleaning.com</p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3 h3">Hours</h3>
            <h3 className="footer__h3">Monday to Friday</h3>
            <p className="footer__text">6:00 AM - 9:00 PM</p>
            <h3 className="footer__h3">Saturday & Sunday</h3>
            <p className="footer__text">8:00 AM - 8:00 PM</p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3 h3">Get a free estimate</h3>
            <h2 className="footer__tel">(414) 567 - 2109</h2>
            <p className="footer__text">
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <button className="footer__btn">Request a free quote</button>
          </div>
        </div>
        <div className="footer__bottom">
          <img src={footerImg} alt="logo" className="footer__img" />
          <p className="footer__bottom__text">
            Copyright © Cleaning X | Designed by{" "}
            <strong className="footer__strong">BRIX Templates</strong> - Powered
            by <strong className="footer__strong">Webflow - Licenses</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
