import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 50px;

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

    @media (max-width: 1130px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 820px){
        display: flex;
        flex-direction: column;
        align-items: unset; 
    }
`

export const CardSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    border: 1px solid;
    border-radius: 20px;

    cursor: pointer;
`

export const CardImg = styled.img`
    height: 200px;
    width: 200px;
`

export const CardText = styled.div``