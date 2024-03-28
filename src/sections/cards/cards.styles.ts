import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: 0 auto;
    width: 75%;
`

export const Header = styled.header``

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px; 
    justify-content: center; 
    align-items: center; 
`


export const CardSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    border: 1px solid;
    border-radius: 20px;
`

export const CardImg = styled.img`
    height: 200px;
    width: 200px;
`

export const CardText = styled.div``