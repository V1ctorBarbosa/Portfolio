import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Header = styled.header`
  padding-block: 5px;
`;

export const ProjectSection = styled(motion.a)`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 20px;
  padding: 20px;
  background-color: ${props => props.theme.secondary};

  cursor: pointer;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ProjectIcon = styled.div``;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
