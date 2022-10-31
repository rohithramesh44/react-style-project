import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Temp } from "../style";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h1>The Athlete</h1>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
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

const Work = styled.div`
  min-height: 100vh;
  padding: 0 10rem;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  h1 {
    font-size: 4rem;
  }
  .line {
    width: 100%;
    height: 4px;
    background-color: #252424;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
