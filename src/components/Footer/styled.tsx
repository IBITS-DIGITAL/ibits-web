import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #170120;
  min-height: 585px;
  > div {
    margin: 0 auto;
    max-width: 1040px;
    padding: 0 12px;
  }
`;

export const BottomText = styled.div`
  border-top: 1px solid #FA6EE9;
  padding: 12px 0;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  color: #FFFFFF99;
`;

export const SectionInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 -20px;
  padding: 130px 0;
  flex-wrap: wrap;
`;
export const Section = styled.div`
  margin: 0 20px;
  &.logo-container {
    align-self: center;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: #FA6EE9;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
  > a {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: rgba(255, 255, 255, 0.75);
    transition: all .3s ease;
    &:hover {
      color: white;
    }
  }
`;

export const EmailLink = styled.a`
  color: #BB9AF7; // Example color based on the image
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;