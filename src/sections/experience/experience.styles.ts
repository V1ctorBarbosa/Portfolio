import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin: 0 auto;
  width: 75%;
`;

export const CardContainer = styled(motion.div)`
  max-width: 100%;

  display: flex;
  justify-content: space-between;

  border-radius: 20px;
  padding: 20px;

  cursor: default;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 820px) {
    width: 100%;
  }
`;
