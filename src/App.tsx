//React
import React from "react";

//Styles
import styled from "styled-components";

//Sections
import Header from "./sections/header/header";
import Navbar from "./sections/nav/nav";
import Home from "./sections/home/home";
import Experience from "./sections/experience/experience";
import Cards from "./sections/cards/cards";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 70px;
`

const Main: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <Experience />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
};

export const App: React.FC = (): JSX.Element => {
  return <Main />;
};
