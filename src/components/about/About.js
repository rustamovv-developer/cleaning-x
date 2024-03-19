import React from "react";
import aboutImg1 from "../../assets/images/about-1.png";
import aboutImg2 from "../../assets/images/about-2.png";
import aboutImg3 from "../../assets/images/about-3.png";
import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__info">
          <div className="about__top">
            <h2 className="about__top__title">About Us</h2>
            <p className="about__top__text">
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="about__center">
            <div className="about__card">
              <img
                src={aboutImg1}
                alt="about__img"
                className="about__card__img"
              />
              <h2 className="about__title">1. Schedule online</h2>
              <p className="about__text">
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="about__card">
              <img
                src={aboutImg2}
                alt="about__img"
                className="about__card__img"
              />
              <h2 className="about__title">2. Pay online easily</h2>
              <p className="about__text">
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="about__card">
              <img
                src={aboutImg3}
                alt="about__img"
                className="about__card__img"
              />
              <h2 className="about__title">3. Get your house cleaned</h2>
              <p className="about__text">
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
          <div className="about__bottom">
            <button className="about__btn btn-primary">Get a free quote</button>
            <button className="about__button">Explore services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
