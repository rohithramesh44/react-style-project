import React from "react";
//importing svg icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//importing images
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="time icon" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="time icon" />
              <h3>Discovery</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="time icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="time icon" />
              <h3>TeamWork</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Home image" />
      </div>
    </div>
  );
};

export default ServicesSection;
