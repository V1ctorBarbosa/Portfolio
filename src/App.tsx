//React
import React from "react";

//Sections
import Header from "./sections/header/header";
import Navbar from "./sections/nav/nav";
import Home from "./sections/home/home";
import Cards from "./sections/cards/cards";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

const Main: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export const App: React.FC = (): JSX.Element => {
  return <Main />;
};
