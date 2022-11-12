import React from "react";
import nl from "../../assets/images/nl.jpg";
import sagrada from "../../assets/images/sagrada_familia.png";
import pave from "../../assets/images/pave.jpg";
import tunnel from "../../assets/images/tunnel.jpg";
import invalides from "../../assets/images/invalides.png";
import paris from "../../assets/images/paris.jpg";
import church from "../../assets/images/church_inside.jpg";
import glass from "../../assets/images/glass_building.jpg";
import dragon from "../../assets/images/dragon_building.jpg";
import tseuzier from "../../assets/images/tseuzier.png";
import canette from "../../assets/images/canettes.png";
import flims from "../../assets/images/flims_1.png";

import "./portfolio.page.styles.scss";

const Portfolio = () => {
    return (
        <div className="portfolio-container" id="portfolio">
            <h1 className="portfolio-title box-shadow">Portfolio</h1>
            <div className="portfolio-picture-container">
                <div className="landscape grow">
                    <img src={nl} alt="Netherlands calm"/>
                </div>
                <div className="portrait grow">
                    <img src={sagrada} alt="Sagrada Familia bottom view"/>
                </div>
                <div className="portrait grow">
                    <img src={tunnel} alt="Lonely tunnel"/>
                </div>
                <div className="portrait grow">
                    <img src={pave} alt="Close up"/>
                </div>
                <div className="portrait grow">
                    <img src={invalides} alt="Invalides, Paris"/>
                </div>
                <div className="portrait grow">
                    <img src={paris} alt="Eiffel Tower, Paris"/>
                </div>
                <div className="portrait grow">
                    <img src={dragon} alt="Beware of the dragon"/>
                </div>
                <div className="portrait grow">
                    <img src={church} alt="Old Church"/>
                </div>
                <div className="portrait grow">
                    <img src={glass} alt="Glass building, Barcelona"/>
                </div>
                <div className="portrait grow">
                    <img src={canette} alt="Street Art, Barcelona"/>
                </div>
                <div className="portrait grow">
                    <img src={flims} alt="Flims lake, Switzerland"/>
                </div>
                <div className="landscape grow">
                    <img src={tseuzier} alt="Tseuzier lake, Switzerland"/>
                </div>
                {/* <div className="normal grow">
          <img src={landscape28} alt="Portfolio pic" />
        </div> */}

            </div>
        </div>
    );
};

export default Portfolio;
