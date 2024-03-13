import styled from "styled-components";

const Container = styled.div`
  font-size: inherit; /* Adjust the font size as needed */
  font-weight: inherit; /* Optional: Makes the gradient more visible */
  background: -webkit-linear-gradient(bottom, #480564, #E612A2); /* Example gradient */
  background: linear-gradient(to top, #480564, #E612A2); /* Standard syntax */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Hide the text color */
  display: inline-block; /* Necessary for some elements */
`;

interface IProps {
  children?: string;
}
export default (props: IProps) => <Container>{props.children}</Container>;
