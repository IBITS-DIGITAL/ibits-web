import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = motion(styled.div`
  padding: 12px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0.19);
  margin-bottom: 10%;

  > div {
    font-size: 52px;
    text-align: center;
    line-height: 1.1;
    > img {
      margin: 0 auto 65px;
    }

    > div{
      display: flex;
      align-items: center;
      justify-content: center;
      > div > div {
        display: flex;
      }
    }
  }
`);

