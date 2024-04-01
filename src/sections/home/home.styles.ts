import styled from "styled-components";

//Styles
import { colors } from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    width: 75%;
`

export const Header = styled.header``

export const Main = styled.main`
    width: 100%;
`

export const ProfileImg = styled.img`
    width: 50%;
    display: flex;

    border: 1px solid ${colors.secondary};
    border-radius: 100%;
    margin: auto;
`

export const FloatingIconsSection = styled.div`
    width: 50%;
    height: 50%;

    padding: 50px;
    border-radius: 100%;

    margin: auto;
    position: relative;
`

export const Section = styled.section``

