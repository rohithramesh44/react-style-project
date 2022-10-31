import React from "react";
import home1 from "../img/home1.png";
import { About, Image, Description, Hide } from "../style";

import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimi = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const containerAnimi = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.25 },
    },
  };
  return (
    <About>
      <Description>
        <div className="title">
          <motion.div variants={containerAnimi} initial="hidden" animate="show">
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
          </motion.div>

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
