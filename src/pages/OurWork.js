import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
// import { Temp } from "../style";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeOutAnimi,
  photoAnimi,
  lineAnimi,
  sliderContainerAnimi,
  sliderAnimi,
} from "../animations";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainerAnimi}>
        <SliderFrame variants={sliderAnimi}></SliderFrame>
        <SliderFrame1 variants={sliderAnimi}></SliderFrame1>
        <SliderFrame2 variants={sliderAnimi}></SliderFrame2>
        <SliderFrame3 variants={sliderAnimi}></SliderFrame3>
        <SliderFrame4 variants={sliderAnimi}></SliderFrame4>
      </motion.div>
      <Movie>
        <motion.h1 variants={fadeOutAnimi}>The Athlete</motion.h1>
        <motion.div variants={lineAnimi} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimi} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h1>The Theracer</h1>
        <div className="line"></div>
        <Link to="/work/the-theracer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h1>The Goodtimes</h1>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  h1 {
    font-size: 4rem;
  }
  .line {
    width: 100%;
    height: 4px;
    background-color: #0dcf3a;
    margin: 3rem 0;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const SliderFrame = styled(motion.div)`
  position: fixed;
  top: 15%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #3b34c8;
  z-index: 44;
`;
const SliderFrame1 = styled(SliderFrame)`
  background-color: #be34c8;
`;
const SliderFrame2 = styled(SliderFrame)`
  background-color: #c86a34;
`;
const SliderFrame3 = styled(SliderFrame)`
  background-color: #c8b734;
`;
const SliderFrame4 = styled(SliderFrame)`
  background-color: #34c865;
`;

export default OurWork;
