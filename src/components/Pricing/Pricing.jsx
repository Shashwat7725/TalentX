import React, { useState } from "react";
import "./pricing.css";
import { PiToggleRightFill, PiToggleLeftFill } from "react-icons/pi";
import { BsCheckCircle } from "react-icons/bs";
const Pricing = () => {
  const [on, setOn] = useState(false);
  return (
    <section className="pricing">
      <div className="container">
        <h1 className="toggle-heading">Simple and Transparent Pricing</h1>
        <div className="toggle-container flex">
          <p>Yearly Plans</p>
          {on ? (
            <PiToggleLeftFill
              onClick={() => setOn(!on)}
              className="toggle-btn"
              size={50}
            />
          ) : (
            <PiToggleRightFill
              onClick={() => setOn(!on)}
              className="toggle-btn"
              size={50}
            />
          )}
          <p>Monthly Plans</p>
        </div>
        <div className="price-container flex">
          <div className="professional flex">
            <h1>Professional Plan</h1>
            <p>For Individuals and Small Teams</p>
            <h1 id="price-tag">
              {on ? (
                <div>
                  <h1>$15</h1>
                  <span id="sub-price">/per user per month</span>
                </div>
              ) : (
                <div>
                  <h1>$19</h1>
                  <span id="sub-price">/per user per month</span>
                </div>
              )}
            </h1>
            <button className="secondary-btn btn">
              Start 14-day Free trial
            </button>
            <hr />
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Up to 15 Jobs per Account</p>
            </div>
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Up to 10,000 Candidates</p>
            </div>
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Unlimited Hiring Managers</p>
            </div>
          </div>
          <div className="enterprise flex">
            <h1>Expertise Plan</h1>
            <p>For Industry Leaders</p>
            <h1 id="price-tag">
              {on ? (
                <div>
                  <h1>$35</h1>
                  <span id="sub-price">/per user per month</span>
                </div>
              ) : (
                <div>
                  <h1>$39</h1>
                  <span id="sub-price">/per user per month</span>
                </div>
              )}
            </h1>
            <button className="secondary-btn btn">
              Start 14-day Free trial
            </button>
            <hr />
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Unlimited Jobs</p>
            </div>
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Unlimited Candidates</p>
            </div>
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Unlimited Hiring Managers</p>
            </div>
          </div>
          <div className="custom flex">
            <h1>Custom Plan</h1>
            <p>For Custom Integrations</p>
            <h1 id="price-tag">On Demand</h1>
            <button className="secondary-btn btn">Contact Us</button>
            <hr />
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Everything in Enterprise plan</p>
            </div>
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Custom Features</p>
            </div>
            <div className="checked-items flex">
              <BsCheckCircle className="tick-icon" />
              <p>Custom Integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
