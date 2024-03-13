import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import * as SC from './styled';

// Animation settings for Framer Motion
const slideVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface ISlides {
  backgroundImage: string;
  text: string;
  author: string;
  logo: string;
}
interface IProps {
  slides: ISlides[];
}
export default (props: IProps) => {
  const { slides } = props;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SC.SliderContainer>
      <AnimatePresence>
        <SC.Slide
          key={slides[current].backgroundImage}
          style={{ backgroundImage: `url(${slides[current].backgroundImage})` }}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 2 }}
          className={`style-${(current % 3) + 1}`}
        >
          <div>
            <SC.Text>
              <p>{slides[current].text}</p>
              <SC.Author>{slides[current].author}</SC.Author>
            </SC.Text>
            <SC.Logo src={slides[current].logo} alt="logo" />
          </div>
        </SC.Slide>
      </AnimatePresence>
    </SC.SliderContainer>
  );
};

