import React from "react";
import "./notification.css";
import { LiaGreaterThanSolid } from "react-icons/lia";
const Notification = () => {
  return (
    <div className="notification">
      <p>
        Announcing Live Training Webinars
        <span id="notification-link">
          <a href="#">Click here to register!</a>
        </span>
      </p>
      <LiaGreaterThanSolid className="icon" />
    </div>
  );
};

export default Notification;
