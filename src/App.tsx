import React from 'react';

//Components
import Header from './components/header/header';
import Navbar from './components/nav/nav';
import Home from './components/home/home';
import Cards from './components/cards/cards';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

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