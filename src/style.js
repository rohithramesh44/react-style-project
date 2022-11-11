import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  position: absolute;
  left: 5%;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  position: absolute;
  right: 5%;
  width: 45%;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
export const Temp = styled.div`
  color: #fff;
  font-size: 4rem;
`;
