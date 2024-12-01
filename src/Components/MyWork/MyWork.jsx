import React from "react";
import "./MyWork.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="themePattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img src={work.w_img} className="project-img" alt="projectImg" />{" "}
            </a>
          );
        })}
      </div>

      <div>
        <a
          href="https://github.com/dhanushsrs"
          target="_blank"
          rel="noopener noreferrer"
          className="mywork-showmore"
        >
          <p className="showmore">Show More</p>
          <img src={arrow_icon} alt="arrowIcon" />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
