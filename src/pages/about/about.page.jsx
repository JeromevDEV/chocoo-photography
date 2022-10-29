import React from "react";

import "./about.page.styles.scss";
import aboutImage from "../../assets/images/About.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title box-shadow">About me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="about pic" />
        </div>
        <div className="about-text">
          <p>
            Hey ! <br/>
              I'm Chocoo, you may also know me as ChocooPanda or ChocooCrypto. I'm the founder of Chocoo's Lab and I
            decided to dedicate a whole website to one my activity... photography and art creation ! <br/> <br/>
              On this website you'll find all of my pictures and creation, you'll also find my links to <a href="https://exchange.art/ChocooPanda/nfts" target="_blank" rel="noopener noreferrer">Exchange.art </a>
             and <a href="https://formfunction.xyz/@ChocooPanda" target="_blank" rel="noopener noreferrer">Formfunction.xyz</a> in case you'd like to purchase a piece !
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
