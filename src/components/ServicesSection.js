import React from "react";
//importing svg icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//importing images
import home2 from "../img/home2.png";
//importing style componants;
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="time icon" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="time icon" />
              <h3>Discovery</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="time icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="time icon" />
              <h3>TeamWork</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Home image" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 22rem;
  margin-right: 3rem;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    font-size: 2.2rem;
    margin-left: 2rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export default ServicesSection;
