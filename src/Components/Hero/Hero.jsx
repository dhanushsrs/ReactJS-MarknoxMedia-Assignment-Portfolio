import React from "react";
import "./Hero.css";

import profile_photo from "../../assets/profile_photo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_photo} alt="profileImg" />

      <h1>
        <span>I&apos;m Dhanushkumar,</span> frontend developer based in Tamil
        Nadu, India
      </h1>
      <p>
        A passionate and creative front-end developer eager to build innovative
        and user-friendly web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/16GHdy-364bVNHjRNlkjh1vHKwL1GxZX3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
