import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components
export const SliderContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  max-height: 980px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Slide = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  > div {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    height: 100%;
  }
  &:after {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 34.5%, #E612A2 98.17%);
  }
  &.style-1:after {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 34.5%, #87067A 98.17%);
  }
  &.style-2:after {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 34.5%, #480564 98.17%);
  }
  &.style-3:after {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 34.5%, #E612A2 98.17%);
  }
`;

export const Text = styled(motion.div)`
  font-family: Arial;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  max-width: 940px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
  padding-bottom: 8%;
  position: relative;
  z-index: 10;
`;

export const Author = styled.div`
  font-size: 32px;
  margin-top: 24px;
`;

export const Logo = styled.img`
  position: absolute;
  bottom: 30px;
  right: 40px;
  width: 250px;
  z-index: 10;
  filter: brightness(0) invert(1);
`;
