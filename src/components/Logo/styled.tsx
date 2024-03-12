import styled from "styled-components";
import { motion } from 'framer-motion';

export const Logo = motion(styled.img<{
  colored?: boolean;
  hasOnClick?: boolean;
  height?: string;
}>`
  display: block;
  height: ${({height}) => height};
  ${({hasOnClick}) => hasOnClick ? 'cursor: pointer;' : 'pointer-events: none;'}
  ${({colored}) => !colored ? 'filter: brightness(0) invert(1);' : ''}
`);
