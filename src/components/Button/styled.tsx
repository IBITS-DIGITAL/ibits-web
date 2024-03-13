import styled from "styled-components";

export const Button = styled.button<{width?: string, lightTheme?: boolean}>`
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
  color: #480564;
  padding: 15px 25px;
  border: 1px solid #87067A;
  border-radius: 8px;
  transition: all .3s ease;
  background-color: white;
  outline: none;
  ${({width}) => width ? `width: ${width};` : ''}
  ${({lightTheme}) => lightTheme ? `
    color: white;
    border-color: white;
    background-color: transparent;
  ` : ''}
  &:hover {
    color: white;
    background-color: #87067A;
    border-color: #87067A;
  }
`;