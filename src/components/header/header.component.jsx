import React from "react";
import { Link } from "react-scroll";
import "./header.styles.scss";
import {
  AiOutlineUser,
  AiOutlineBook,
  // AiOutlineMail
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-button">
            <Link to="homepage" smooth={true}>
              <span className="logo">Chocoo's</span>
              <span> Photography</span>
            </Link>
          </li>
          <div className="nav-items">
            <li className="nav-button">
              <Link to="about" smooth={true} offset={-50}>
                <AiOutlineUser style={{ marginBottom: "-1px", marginRight: "3px"}} />
                About
              </Link>
            </li>
            <li className="nav-button">
              <Link to="portfolio" smooth={true} offset={-50}>
                <AiOutlineBook style={{ marginBottom: "-1px", marginRight: "3px"}} />
                Portfolio
              </Link>
            </li>
            {/*<li className="nav-button">
              <Link to="contact" smooth={true} offset={-50}>
                <AiOutlineMail style={{ marginBottom: "-1px", marginRight: "3px"}} />
                Contact
              </Link>
            </li>*/}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
