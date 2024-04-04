import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;

  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);

  background-color: ${(props) => props.theme.secondary};
  padding: 15px 10px;
  border-radius: 50px;

  opacity: 0;
  animation: fade-nav-in 1s ease 1 1s forwards;

  @media (max-width: 820px) {
    flex-direction: row;
    z-index: 2;

    top: 85%;
    left: 50%;
    transform: translate(-50%, 50%);

    border-radius: 100px;
    animation: fade-nav-bottom 1s ease forwards;
  }

  @media (max-width: 380px) {
    width: 320px;
    gap: 10px;
  }

  @keyframes fade-nav-bottom {
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-nav-in {
    to {
      transform: translateY(-50%) translateX(0);
      opacity: 1;
    }
  }
`;
export const Link = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryLight};
`;

export const NightMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  border-radius: 50%;
  background-color: ${(props) =>
    props.theme.id == "light" ? "#191410" : "#F16D82"};
`;
