import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 75%;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding-block: 5px;
`;

export const ContactsSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ContactCard = styled(motion.a)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 20px 50px;
  border-radius: 20px;
`;
