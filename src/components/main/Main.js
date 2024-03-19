import React from "react";
import About from "../about/About";
import Services from "../services/Services";
import Articles from "../articles/Articles";
import Contact from "../contact/Contact";

function Main() {
  return (
    <main className="main">
      <About />
      <Services />
      <Articles />
      <Contact />
    </main>
  );
}

export default Main;
