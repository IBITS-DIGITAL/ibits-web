import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 130px;
  background-color: #37024C;
  min-height: 100vh;
  max-height: 990px;
  color: white;
  font-size: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    p {
      line-height: 1;
      margin: 0 12px;
    }
  
    > img {
      margin: 0 auto 40px;
    }
  }
`;
