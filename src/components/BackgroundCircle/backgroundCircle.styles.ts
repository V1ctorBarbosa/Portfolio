import styled from "styled-components";
import { IBackgroundColors } from "./backgroundCircle.types";

export const Container = styled.div<IBackgroundColors>`
    position: fixed;
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    height: 200px;
    width: 200px;
    background: ${props => props.color};
    filter: blur(140px);
`