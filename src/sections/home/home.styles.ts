import styled from "styled-components";

//Styles
import { colors } from "../../styles/colors";

//Animation
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 0 auto;
  width: 75%;
`;

export const Header = styled.header``;

export const Main = styled.main`
  width: 100%;
`;

export const ProfileImg = styled(motion.img)`
  width: 40%;
  display: flex;

  border: 1px solid ${colors.secondary};
  border-radius: 100%;
  margin: auto;
`;

export const FloatingIconsSection = styled(motion.div)``;

export const Section = styled.section``;
