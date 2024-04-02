import styled from "styled-components";

//Utils
import { handleSize, handleFontWeight, handleTextAlign } from "./utils";

//Types
import { IText } from "./text.types";

export const TextContainer = styled.p<IText>`
    color: ${({ color }) => color};
    text-decoration: ${({ decoration }) => decoration || 'none'};
    font-size: ${({ type }) => handleSize(type)};
    font-weight: ${({ weight }) => handleFontWeight(weight) || 'normal'};
    text-align: ${({ align }) => handleTextAlign(align) || 'center'};

    word-wrap: break-word; 
`;