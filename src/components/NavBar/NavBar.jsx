import React from "react";
import "./nav.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container flex">
        <div className="logo">
          <img src="../public/images/Hero/logo3.png" className="nav-img"></img>
          <h3 className="title">TalentX</h3>
        </div>
        <ul className="nav-items flex">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Integrations</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <button type="button" className="primary-btn demo-btn">
              Book a Demo
            </button>
          </li>
          <li>
            <button type="button" className="secondary-btn start-btn">
              Start for Free
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
