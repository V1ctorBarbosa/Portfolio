import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: ${props => props.theme.secondary};
  z-index: 1;
}

:root {
  --pc-width: 75%;
  --tab-width: 90%;
  --phone-width: 100%;
}

body {
  background: ${props => props.theme.main};
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  animation: move 1s linear infinite forwards;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0
}

.container {
  border-radius: 10px;
  width: var(--pc-width);
  color: var(--text-pri);
  padding: 10px 40px;
  margin: 5px auto;
  padding: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px) {
  .container {
    width: var(--phone-width);
  }
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
