import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 130px;
  background: #37024C;
  min-height: 100vh;
  max-height: 990px;
  color: white;
  font-size: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 5;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // animation: bgTransition 6s infinite;
    background: inherit;
      background: rgba(55, 2, 76, 0.5); /* Semi-transparent overlay to enhance the blur effect */
    backdrop-filter: blur(190px); /* Apply strong backdrop blur */
    z-index: 5;
  }
  
  > div {
    width: 100%;
    z-index: 6;
    p {
      line-height: 1;
      margin: 0 12px;
    }

    > img {
      margin: 0 auto 40px;
    }
  }

  > svg {
    position: absolute;
   }

  > svg#vector1 {
    top: 0;
    left: 0;
    animation: vector1 8s infinite;
    z-index: 4;
  }

  > svg#vector2 {
    bottom: 0;
    left: 0;
    animation: vector2 8s infinite;
    z-index: 2;
  }

  > svg#vector3 {
    top: 0;
    right: 0;
    animation: vector3 8s infinite;
    z-index: 3;
  }

  > svg#vector4 {
    bottom: 0;
    right: 0;
    animation: vector4 8s infinite;
    z-index: 1;
  }

  @keyframes bgTransition {
    0% {
      background: none;
      background: none;
    }
    50% {
      background: inherit;
      background: rgba(55, 2, 76, 0.5); /* Semi-transparent overlay to enhance the blur effect */
    }
    100% {
      background: none;
      background: none;
    }
  }

  @keyframes vector1 {
    0% {
      transform: translate(-20%, -40%) scale(1); /* Start at the top left corner, hiding 50% of the height */
    }
    33% {
      transform: translate(85%, -40%) scale(0.85); /* Move horizontally to 70% of the container's width and decrease size to 85% */
    }
    66% {
      transform: translate(120%, 70%) scale(1.25); /* Move to the lower right corner and increase size by 25% */
    }
    100% {
      transform: translate(-20%, -40%) scale(1); /* Move back to the top left corner and original size */
    }
  }

  @keyframes vector2 {
    0% {
      transform: translate(-30%, 30%) scale(1); /* Start at the top left corner, hiding 50% of the height */
    }
    33% {
      transform: translate(105%, 25%) scale(1.3); /* Move horizontally to 70% of the container's width and decrease size to 85% */
    }
    66% {
      transform: translate(-18%, -25%) scale(1); /* Move to the lower right corner and increase size by 25% */
    }
    100% {
      transform: translate(-30%, 30%) scale(1); /* Move back to the top left corner and original size */
    }
  }

  @keyframes vector3 {
    0% {
      transform: translate(10%, -40%) scale(1); /* Start at the top left corner, hiding 50% of the height */
    }
    33% {
      transform: translate(-62%, 20%) scale(0.8); /* Move horizontally to 70% of the container's width and decrease size to 85% */
    }
    66% {
      transform: translate(-77%, 30%) scale(1); /* Move to the lower right corner and increase size by 25% */
    }
    100% {
      transform: translate(10%, -40%) scale(1); /* Move back to the top left corner and original size */
    }
  }

  @keyframes vector4 {
    0% {
      transform: translate(15%, 30%) scale(1); /* Start at the top left corner, hiding 50% of the height */
    }
    33% {
      transform: translate(-70%, -50%) scale(1); /* Move horizontally to 70% of the container's width and decrease size to 85% */
    }
    66% {
      transform: translate(18%, -30%) scale(1.1); /* Move to the lower right corner and increase size by 25% */
    }
    100% {
      transform: translate(15%, 30%) scale(1); /* Move back to the top left corner and original size */
    }
  }
`;
