import styled from 'styled-components';

export const Container = styled.div<{ width?: number, block?: boolean }>`
  overflow: hidden;
  height: 1em;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: inherit;
  color: inherit;
  width: ${({ width, block }) => !block ? (width ? `${width}px` : 'auto') : 'auto'};
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  > p {
    white-space: nowrap;
  }
`;
