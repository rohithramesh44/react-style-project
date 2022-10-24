import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyleNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyleNav>
  );
};

const StyleNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  h1 > * {
    font-family: "Lobster", cursive;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-size: 4rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 10rem;

    position: relative;

    &:not(:first-child) {
    }
    & > * {
      font-size: 2rem;
      font-weight: 400;
      text-decoration: none;
      color: #fff;
      text-transform: capitalize;
    }
  }
`;
export default Nav;
