import styled from 'styled-components';

export const Container = styled.div`
  min-height: 700px;
  background-color: #37024C;
  color: white;
  padding: 50px 12px;
  margin: 120px 0;
`;

export const Title = styled.div`
  font-family: Arial;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  margin: 0 auto 40px;
  text-transform: uppercase;
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  width: 320px;
  height: 430px;
  padding: 16px;
  background: rgba(245, 245, 245, 0.1);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.04);
  margin: 12px;
  border-radius: 8px;
  > img {
    height: 116px;
    margin: 45px auto;
    display: block;
  }
  > div {
    font-family: Arial;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;

    > p {
      font-weight: 700;
      font-size: 24px;
      margin: 0 0 12px;
    }
  }
`;
