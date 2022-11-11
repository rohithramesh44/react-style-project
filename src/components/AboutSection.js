import React from "react";
import home1 from "../img/home1.png";
import { About, Image, Description, Hide } from "../style";
import Wave from "./Wave";

// animation
import { motion } from "framer-motion";
import { titleAnimi, fadeOutAnimi, photoAnimi } from "../animations";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div>
            <Hide>
              <motion.h2 variants={titleAnimi}>We work to make</motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnimi}>
                Your <span>dreams</span> come
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnimi}>true.</motion.h2>
            </Hide>
          </div>

          <motion.p variants={fadeOutAnimi}>
            Contact for any photograpy or videography ideas that you have
            professionals with amaze skills
          </motion.p>
          <motion.button variants={fadeOutAnimi}>More</motion.button>
        </div>
      </Description>
      <Image>
        <motion.img variants={photoAnimi} src={home1} alt="Profile pic" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
