import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MovieState } from "../movieState";
import { useLocation } from "react-router-dom";

//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  console.log(movie);
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="Movie piture" />
            <Awards>
              {movie.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              ))}
            </Awards>
            <ImageDisplay>
              <img src={movie.secondaryImg} alt="Movie-picture" />
            </ImageDisplay>
          </HeadLine>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  width: 100%;
  padding: 5rem 10rem;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    font-size: 4rem;
    font-weight: 500;
    color: #fff;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    height: 5px;
    background-color: #23d997;
    border-radius: 5px;
    margin: 1rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
