import React from "react";
import styled from "styled-components";
import { About } from "../style";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            perspiciatis ab esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            laborum!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question">
        <h4>What benfits become</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            perspiciatis ab esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            laborum!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Could you create</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            perspiciatis ab esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            laborum!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What is your purpose</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            perspiciatis ab esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            laborum!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Which technology use</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            perspiciatis ab esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            laborum!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do i Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            perspiciatis ab esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            laborum!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h4 {
    padding-bottom: 2rem;
    font-weight: 300;
  }
  p {
    font-size: 1.6rem;
    padding: 1rem;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
  }
`;

export default FaqSection;
