import styled from "styled-components";

//Styles
import { colors } from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Header = styled.header`
    padding-block: 5px;
`

export const ProjectSection = styled.section`
  display: flex;
  align-self: center;
  
  width: 80%;
  height: 50%;

  background-color: ${colors.secondaryLight};
  cursor: pointer;
`;
export const ProjectImg = styled.img`
    height: 200px;
    width: 200px;
`

