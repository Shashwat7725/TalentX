import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer-container flex">
        <div className="footer-logo-info">
          <div className="logo">
            <img
              src="../public/images/Hero/logo3.png"
              className="nav-img"
            ></img>
            <h3 className="logo-title">TalentX</h3>
          </div>
          <p>
            TalentX is an AI Recruitment<br></br> Software enabling human
            resources<br></br>
            departments and recruitment<br></br> agencies to source and hire in
            the<br></br> most effective way.
          </p>
        </div>

        <div className="footer-info flex">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">TalentX Status</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
