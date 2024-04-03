import styled from "styled-components";


export const Image = styled.img`
    position: absolute;
    height: 60%;
    border-radius: 50%;
    border: 1px solid var(--color-sec);

    @media (max-width: 820px) {
      height: 100%;
    }
`

export const HiddenSection = styled.section`
    display: flex;
    margin-top: 200px;
    border-radius: 10px;
    padding: 5px;
`

export const Section = styled.section`
  width: 70%;
`