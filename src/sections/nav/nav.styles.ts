import styled from "styled-components";

//Animation
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;

  position: fixed;
  top: 0;
  left: 3%;
  transform: translate(-50%, 70%);

  background-color: ${props => props.theme.secondary};
  padding: 15px 10px;
  border-radius: 50px;

  @media (max-width: 820px) {
    flex-direction: row;
    z-index: 2;

    top: 85%;
    left: 50%;
    transform: translate(-50%, 50%);

    border-radius: 100px;
  }

  @media (max-width: 380px){
    width: 320px;
    gap: 10px;
  }
`;

export const Link = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 50%;
  background-color: ${props => props.theme.primaryLight};
`;

export const NightMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  border-radius: 50%;
  background-color: ${props => props.theme.id == 'light' ? '#191410' : '#F16D82' };
`;
