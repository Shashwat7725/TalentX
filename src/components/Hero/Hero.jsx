import React from "react";
import "./hero.css";
import { BsCheckCircle } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container flex hero-container">
        <div>
          <h1 className="heading">
            Everything
            <br />
            recruiters need,
            <br />
            all in one place
          </h1>
          <p className="description">
            AI Recruitment Software designed to <br></br>source and hire
            candidates faster. Tailored<br></br> for HR teams, recruitment
            agencies, and<br></br> headhunters.
          </p>
          <button className="secondary-btn btn">Start 14-day Free trial</button>
          <button className="primary-btn btn">Book a Demo</button>
          <div className="tick-boxes flex">
            <p>
              <BsCheckCircle className="tick-icon" />
              No credit card required
            </p>
            <p>
              <BsCheckCircle className="tick-icon" />
              No commitment
            </p>
          </div>
        </div>

        <img
          src="../public/images/Hero/hero-img.png"
          className="hero-img"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
