import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = motion(styled.div`
  font-size: 52px;
  color: #2D2C2D;
  text-align: left;
  margin-bottom: 20px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 12px;
  line-height: 1.1;
  > span {
    display: block;
    color: #87067A;
    font-weight: bold;
  }
`);