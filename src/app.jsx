import Header from "./components/header/header";
import Home from "./components/home/home";
import Cards from "./components/cards/cards"
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";

function App() {
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
}
export default App;
