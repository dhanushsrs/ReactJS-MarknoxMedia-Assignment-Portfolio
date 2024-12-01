import React, { useState } from "react";
import "./About.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>

        <img src={theme_pattern} alt="themePattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              As a passionate frontend developer, I specialize in creating
              user-friendly, responsive websites using modern web technologies.
            </p>
            <p>
              I am dedicated to continuous learning and always strive to create
              seamless and engaging web experiences.
            </p>
          </div>

          <div className="about-buttons">
            <button
              onClick={() => handleTabClick("skills")}
              className={activeTab === "skills" ? "active" : ""}
            >
              Skills
            </button>
            <button
              onClick={() => handleTabClick("education")}
              className={activeTab === "education" ? "active" : ""}
            >
              Education
            </button>
            <button
              onClick={() => handleTabClick("experience")}
              className={activeTab === "experience" ? "active" : ""}
            >
              Experience
            </button>
          </div>

          {activeTab === "skills" && (
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "80%" }} />
              </div>

              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "50%" }} />
              </div>

              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "50%" }} />
              </div>

              <div className="about-skill">
                <p>VCS - Git </p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="about-experience">
              <p className="about-year">May 2022 - May 2023</p>
              <p>
                Business Development Associate at NxtWave Disruptive
                Technologies Private Limited
              </p>
              <p className="about-year">June 2017 - May 2022</p>
              <p>Self-Employed - Content Creator</p>
            </div>
          )}

          {activeTab === "education" && (
            <div className="about-education">
              <p className="about-year">Nov 2022 – June 2024</p>
              <p>
                Learned Full-stack Development from Nxtwave Disruptive
                Technologies
              </p>

              <p className="about-year">2013 - 2017</p>
              <p>
                BE Mechanical Engineering (6.89 CGPA) from Maharaja Engineering
                College, Tiruppur
              </p>

              <p className="about-year">2011 - 2013</p>
              <p>
                Intermediate_MBiPC (84.5%) from Sri Vijay Vidyalaya
                Matriculation Higher Secondary School, Dharmapuri
              </p>

              <p className="about-year">2010 - 2011</p>
              <p>
                Secondary School Of Certificate (91.0%) from Sri Vijay Vidyalaya
                Matriculation Higher Secondary School, Dharmapuri
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
