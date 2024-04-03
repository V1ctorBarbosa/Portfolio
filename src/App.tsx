//React
import React from "react";

//Styles
import { Container } from "./GlobalStyles";
import { colors } from "./styles/colors";

//Components
import BackgroundCircle from "./components/BackgroundCircle/backgroundCircle";

//Context
import { GlobalProvider } from "./context/context";

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
  return (
    <Container>
      <BackgroundCircle top="0px" left="0px" color={colors.secondaryLight}/>
      <BackgroundCircle bottom="100px" right="250px" color={colors.secondaryLight} />
      <Header />
      <Navbar />
      <Home />
      <Experience />
      <Techs />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
};

export const App: React.FC = (): JSX.Element => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};
