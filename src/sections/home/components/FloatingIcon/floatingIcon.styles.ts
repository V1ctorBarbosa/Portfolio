import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;

  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: 0.2s ease;
  border-radius: 50%;
  background-image: none; // conditional

`;
