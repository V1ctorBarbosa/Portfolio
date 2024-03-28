import styled from "styled-components";
import { FaBowlFood } from "react-icons/fa6";

//Styles
import { colors } from "../../styles/colors";

export const Icon = styled(FaBowlFood)`
    color: green;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Header = styled.header`
    padding-block: 5px;
`

export const ProjectSection = styled.a`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 20px;
  padding: 20px;
  background-color: ${colors.secondary};

  cursor: pointer;
`;

export const ProjectIcon = styled.div`
    
`

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
