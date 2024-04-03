import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div``

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
`

export const NightMode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

    border-radius: 50%;
    background-color: ${colors.primaryLight};
`