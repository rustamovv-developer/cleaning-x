import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__info">
          <div className="contact__left">
            <h2 className="contact__left__title">Contact Us</h2>
            <p className="contact__left__text">
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="contact__left__exam">
              <i class="fa-solid fa-phone contact__left__exam__icon"></i>
              <div className="contact__left__exam__card">
                <p className="contact__left__exam__text">Call us now</p>
                <h2 className="contact__left__exam__title">(414) 567 - 2109</h2>
              </div>
            </div>
            <h3 className="contact__left__h3">Not convinced yet?</h3>
            <p className="contact__left__text">
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <button className="contact__left__button about__button">
              Browse our packages
            </button>
          </div>
          <div className="contact__right">
            <div className="contact__right__card">
              <input
                placeholder="Full name"
                type="text"
                className="contact__right__input"
              />
              <input
                placeholder="Phone number"
                type="tel:+998887041980"
                className="contact__right__input"
              />
            </div>
            <div className="contact__right__card">
              <input
                placeholder="Address"
                type="text"
                className="contact__right__input"
              />
              <input
                placeholder="Email"
                type="email"
                className="contact__right__input"
              />
            </div>
            <div className="contact__right__card">
              <input
                placeholder="Requested service"
                type="text"
                className="contact__right__input"
              />
              <input
                placeholder="Day of service"
                type="text"
                className="contact__right__input"
              />
            </div>
            <textarea
              placeholder="Add a note"
              className="contact__right__textarea"
            ></textarea>
            <button className="contact__right__btn" type="submit">
              Submit message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
