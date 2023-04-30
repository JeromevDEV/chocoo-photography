import React from "react";
import nl from "../../assets/images/nl.jpg";
import sagrada from "../../assets/images/sagrada_familia.jpg";
import pave from "../../assets/images/pave.jpg";
import tunnel from "../../assets/images/tunnel.jpg";
import invalides from "../../assets/images/invalides.jpg";
import paris from "../../assets/images/paris.jpg";
import church from "../../assets/images/church_inside.jpg";
import glass from "../../assets/images/glass_building.jpg";
import dragon from "../../assets/images/dragon_building.jpg";
import tseuzier from "../../assets/images/tseuzier.jpg";
import canette from "../../assets/images/canettes.jpg";
import flims from "../../assets/images/flims_1.jpg";
import church1 from "../../assets/images/church.jpg";
import church2 from "../../assets/images/church_2.jpg";
import nice_orange from "../../assets/images/nice_orange.jpg";
import nice_umbrella from "../../assets/images/nice_umbrella.jpg";
import nice_water from "../../assets/images/nice_water.jpg";
import nl_cathedrale_db from "../../assets/images/nl_cathedrale_db.jpg";
import nl_roof_db from "../../assets/images/nl_roof_db.jpg";
import nl_water_db from "../../assets/images/nl_water_db.jpg";
import nl_water_rosmalen from "../../assets/images/nl_water_rosmalen.jpg";
import ch_flon from "../../assets/images/flon_compressed.jpg";
import ch_wall_murten from "../../assets/images/wall_c.png";
import ch_cathedrale_3d from "../../assets/images/cathedrale_rue-3D.png";
import ch_poya_bw from "../../assets/images/poya_bw.png";
import ch_bern_fleurs from "../../assets/images/bern_maison_fleur.jpg";
import nl_flower from "../../assets/images/nl_flower.jpg";
import nl_flower_red from "../../assets/images/nl_flower_red.jpg";
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
                <div className="portrait grow">
                    <img src={church1} alt="Church, Switzerland"/>
                </div>
                <div className="portrait grow">
                    <img src={church2} alt="Church, Switzerland"/>
                </div>
                <div className="portrait grow">
                    <img src={nice_orange} alt="Old street, France"/>
                </div>
                <div className="portrait grow">
                    <img src={nice_umbrella} alt="Umbrella street, France"/>
                </div>
                <div className="portrait grow">
                    <img src={nice_water} alt="The sea of Nice, France"/>
                </div>
                <div className="portrait grow">
                    <img src={nl_cathedrale_db} alt="Cathedral, Netherlands"/>
                </div>
                <div className="portrait grow">
                    <img src={nl_roof_db} alt="Glass roof, Netherlands"/>
                </div>
                <div className="portrait grow">
                    <img src={nl_water_db} alt="Holland's house, Netherlands"/>
                </div>
                <div className="portrait grow">
                    <img src={nl_water_rosmalen} alt="Holland's house, Netherlands"/>
                </div>
                <div className="portrait grow">
                    <img src={ch_flon} alt="Flon's street, Lausanne - Switzerland"/>
                </div>
                <div className="landscape grow">
                    <img src={ch_wall_murten} alt="Wall, Murten - Switzerland"/>
                </div>
                <div className="landscape grow">
                    <img src={ch_poya_bw} alt="Poya bridge, Fribourg - Switzerland"/>
                </div>
                <div className="portrait grow">
                    <img src={ch_cathedrale_3d} alt="St-Nicolas Cathedrale 3D, Fribourg - Switzerland"/>
                </div>
                <div className="portrait grow">
                    <img src={ch_bern_fleurs} alt="Colored and floral house, Bern - Switzerland"/>
                </div>
                <div className="portrait grow">
                    <img src={nl_flower} alt="Colored tulips, Amsterdam - Netherlands"/>
                </div>
                <div className="portrait grow">
                    <img src={nl_flower_red} alt="Colored tulips, Amsterdam - Netherlands"/>
                </div>
                {/* <div className="normal grow">
          <img src={landscape28} alt="Portfolio pic" />
        </div> */}

            </div>
        </div>
    );
};

export default Portfolio;
