import React from "react";
import servicesImg1 from "../../assets/images/ser-1.png";
import servicesImg2 from "../../assets/images/ser-2.png";
import servicesImg3 from "../../assets/images/ser-3.png";
import servicesImg from "../../assets/images/ser-main.png";
import "./services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__top">
          <div className="services__exam">
            <h2 className="services__title">Our Services</h2>
            <button className="about__button">Explore services</button>
          </div>
          <div className="services__box">
            <div className="services__card">
              <img
                src={servicesImg1}
                alt="services__img"
                className="services__card__img"
              />
              <h2 className="services__box__title">House cleaning</h2>
              <p className="services__text">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="services__card">
              <img
                src={servicesImg2}
                alt="services__img"
                className="services__card__img"
              />
              <h2 className="services__box__title">Office cleaning</h2>
              <p className="services__text">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="services__card">
              <img
                src={servicesImg3}
                alt="services__img"
                className="services__card__img"
              />
              <h2 className="services__box__title">Industrial cleaning</h2>
              <p className="services__text">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
        <div className="services__bottom">
          <img
            src={servicesImg}
            alt="services__main"
            className="services__bottom__img"
          />
          <div className="services__bottom__card">
            <h3 className="services__bottom__h3">Covid-19 sanitization</h3>
            <h2 className="services__bottom__title">
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p className="services__bottom__text">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className="services__bottom__cart">
              <button className="services__bottom__btn btn-primary">
                Get a free quote
              </button>
              <div className="services__bottom__box">
                <i class="fa-solid fa-phone services__bottom__icon"></i>
                <div className="services__bottom__exam">
                  <p className="services__bottom__exam__text">Call us now</p>
                  <h2 className="services__bottom__exam__title">
                    (414) 567 - 2109
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
