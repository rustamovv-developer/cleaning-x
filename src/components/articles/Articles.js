import React from "react";
import articlesImg1 from "../../assets/images/art-1.png";
import articlesImg2 from "../../assets/images/art-2.png";
import "./articles.css";

function Articles() {
  return (
    <section className="articles" id="articles">
      <div className="container">
        <div className="articles__top">
          <h2 className="articles__title">Articles & resources</h2>
          <div className="articles__btns">
            <button className="article__btn btn-primary">
              Get a free quote
            </button>
            <button className="articles__button about__button">
              Browse articles
            </button>
          </div>
        </div>
        <div className="articles__bottom">
          <div className="articles__box">
            <img
              src={articlesImg1}
              alt="articles__img"
              className="articles__img"
            />
            <div className="articles__card">
              <h2 className="articles__card__title">
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h2>
              <p className="articles__text">
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="articles__exam">
                <h3 className="articles__h3">Jan 28, 2022</h3>
                <div className="articles__checkbox"></div>
              </div>
            </div>
          </div>
          <div className="articles__box">
            <img
              src={articlesImg2}
              alt="articles__img"
              className="articles__img"
            />
            <div className="articles__card">
              <h2 className="articles__card__title">
                How to properly disinfect your phone and other electronics
              </h2>
              <p className="articles__text">
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="articles__exam">
                <h3 className="articles__h3">Feb 1, 2022</h3>
                <div className="articles__checkbox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
