import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis iure quas, accusamus quam voluptatibus itaque possimus
            sunt cum consectetur fuga facilis eum, ipsa ipsum dolores! Impedit,
            voluptatibus? Omnis, vero. Laudantium.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="#navbar">Home</a>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2348077784207</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 tomato.com - All right Reserved.
      </p>
    </div>
  );
};

export default footer;
