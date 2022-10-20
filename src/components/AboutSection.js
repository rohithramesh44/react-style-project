import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
          <p>
            Contact for any photograpy or videography ideas that you have
            professionals with amaze skills
          </p>
          <div className="image">
            <img src={home1} alt="Profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
