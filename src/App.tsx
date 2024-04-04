//React
import React, { useState } from "react";

//Styles
import { Container } from "./GlobalStyles";
import { colors } from "./styles/colors";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";

//Components
import BackgroundCircle from "./components/BackgroundCircle/backgroundCircle";

//styles
import { GlobalStyle } from "./GlobalStyles";

//Sections
import Header from "./sections/header/header";
import Navbar from "./sections/nav/nav";
import Home from "./sections/home/home";
import Experience from "./sections/experience/experience";
import Techs from "./sections/cards/techs";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

const Main: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState(lightTheme);

  const handleTheme = () => {
    if (theme == lightTheme) setTheme(darkTheme);
    else setTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Container>
        <BackgroundCircle top="0px" left="0px" color={colors.secondaryLight} />
        <BackgroundCircle
          bottom="100px"
          right="250px"
          color={colors.secondaryLight}
        />
        <Header />
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Home />
        <Experience theme={theme} />
        <Techs theme={theme} />
        <About theme={theme}/>
        <Contact theme={theme} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export const App: React.FC = () => {
  return <Main />;
};
