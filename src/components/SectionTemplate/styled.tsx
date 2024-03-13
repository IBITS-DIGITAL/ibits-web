import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionDetailsContainer = styled.div`
  position: relative;
`;

export const SectionContainer = motion(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  position: relative;

  > div {
    padding: 0 12px;
    max-width: 586px;
    position: relative;
    z-index: 1;
  }

  .big-circle, .small-circle, .xs-circle {
    position: absolute!important;
    background-color: #87067A;
    min-width: 300px;
    max-width: 300px;
    max-height: 300px;
    min-height: 300px;
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(141.38deg, #87067A 9.27%, #E612A2 86.67%),
    linear-gradient(141.38deg, #87067A 9.27%, #E612A2 86.67%);
  }

  .xl-circle, .small-circle {
    z-index: 2;
  }
  &.style-2,
  &.style-4 {
    flex-direction: row-reverse;
  }

  &.style-1 {
    .big-circle {
      min-width: 300px;
      max-width: 300px;
      max-height: 300px;
      min-height: 300px;
      top: 0;
      right: 0;
    }
    
    .small-circle {
      min-width: 60px;
      max-width: 60px;
      max-height: 60px;
      min-height: 60px;
      top: 40%;
      right: 0;
    }
  }

  &.style-2 {
    .big-circle {
      min-width: 700px;
      max-width: 700px;
      max-height: 700px;
      min-height: 700px;
      top: 0;
      left: 0;
    }
    .small-circle {
      min-width: 100px;
      max-width: 100px;
      max-height: 100px;
      min-height: 100px;
      bottom: 0;
      left: 50%;
    }
  }

  &.style-3 {
    .big-circle {
      min-width: 285px;
      max-width: 285px;
      max-height: 285px;
      min-height: 285px;
      top: 0;
      left: 50%;
    }
    .small-circle {
      min-width: 100px;
      max-width: 100px;
      max-height: 100px;
      min-height: 100px;
      bottom: 0;
      left: 50%;
    }
  }

  &.style-4 {
    .big-circle {
      min-width: 425px;
      max-width: 425px;
      max-height: 425px;
      min-height: 425px;
      top: 0;
      left: 0;
    }
    .small-circle {
      min-width: 100px;
      max-width: 100px;
      max-height: 100px;
      min-height: 100px;
      top: 70%;
      left: 0;
    }
    .xs-circle {
      min-width: 55px;
      max-width: 55px;
      max-height: 55px;
      min-height: 55px;
      top: 85%;
      left: 10%;
    }
  }
`);

export const InfoContainer = motion(styled.div`
  > p {
    font-size: 40px;
    color: #87067A;
    margin: 0 0 20px;
    font-weight: 400;
  }
  > div {
    margin-bottom: 16px;
    font-size: 18px;
    color: #2D2C2D;
  }
`);

export const Image = motion(styled.div<{image: string}>`
  position: relative;
  z-index: 1;
  width: 525px;
  height: 425px;
  border-radius: 16px;
  background-color: #D9D9D9;
  background-image: url('${({image}) => image}'); /* Sets the background image */
  background-size: cover; /* Ensures the image covers the entire element */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents repeating the image */
  box-shadow: 5px 6px 16px 0px #00000033;
`);
