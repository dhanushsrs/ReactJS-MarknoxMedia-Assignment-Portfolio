import React from "react";
import "./Footer.css";

import logo_img from "../../assets/logo_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LinkedIn_icon from "../../assets/LinkedIn_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo_img} className="logo-img" alt="footerLogo" />
          <p>
            I am a passionate and creative front-end developer eager to build
            innovative and user-friendly web applications.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-linkedin-input">
            <img src={LinkedIn_icon} alt="LinkedInIcon" />
            <a
              href="https://www.linkedin.com/in/dhanushkumar-r/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              dhanushkumar-r
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Dhanushkumar R. All rights reserved
        </p>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
