//React
import React from "react";

//Styles
import { Container } from "./GlobalStyles";
import { colors } from "./styles/colors";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useTheme } from "./context/context";
import { ThemeProvider } from "./context/context";

//Components
import BackgroundCircle from "./components/BackgroundCircle/backgroundCircle";

//styles
import { GlobalStyle } from "./GlobalStyles";

//Sections
import Header from "./sections/header/header";
import Navbar from "./components/Navbar/nav";
import Home from "./sections/home/home";
import Experience from "./sections/experience/experience";
import Techs from "./sections/techs/techs";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

const Main: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Container>
        <BackgroundCircle top="0px" left="0px" color={colors.secondaryLight} />
        <BackgroundCircle
          bottom="100px"
          right="250px"
          color={colors.secondaryLight}
        />
        <Header />
        <Navbar />
        <Home />
        <Experience />
        <Techs />
        <About />
        <Contact />
        <Footer />
      </Container>
    </StyledThemeProvider>
  );
};

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider { ...theme }>
      <Main />
    </ThemeProvider>
  );
};
