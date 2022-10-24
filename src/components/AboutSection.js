import React from "react";
import home1 from "../img/home1.png";
import { About, Image, Description, Hide } from "../style";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact for any photograpy or videography ideas that you have
            professionals with amaze skills
          </p>
          <button>More</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="Profile pic" />
      </Image>
    </About>
  );
};

export default AboutSection;
