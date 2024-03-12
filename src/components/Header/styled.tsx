import styled from "styled-components";

export const HeaderInner = styled.div`
  max-width: 1200px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavContainer = styled.div`
  > a {
    padding: 12px;
    color: #480564;
    margin: 0 40px;
    position: relative;
    transition: all .3s ease;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: all .3s ease;
      opacity: 0;
      height: 2px;
      background-color: #480564;
    }
    &:hover {
      &:after {
        opacity: 1;
        width: 80px;
      }
    }
  }
`;

export const HeaderContainer = styled.div<{isScrolled?: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 130px;
  background-color: ${({isScrolled}) => isScrolled ? 'white' : 'transparent'};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all .3s ease;
  ${({isScrolled}) => !isScrolled ? `
    > ${HeaderInner} {
      > a, button {
        opacity: 0;
        visibility: hidden;
      }
      ${NavContainer} {
        > a {
          color: white;
          &:after {
            background-color: white;
          }
        }
      }
    }
  ` : 'box-shadow: 0px 4px 4px 0px #00000040;'}
`;