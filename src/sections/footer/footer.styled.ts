import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;

    margin: 0 auto;
    width: 75%;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: center;

    gap: 10px;
`

export const ScrollUp = styled(motion.a)`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    gap: 10px;

    padding: 10px 20px;
    border-radius: 20px;
`

export const SocialMidiaSection = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const SocialMidiaIcon = styled(motion.a)`
    border-radius: 20px;
    padding: 10px;
`