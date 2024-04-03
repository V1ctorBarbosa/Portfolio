//Components
import Text from "../../components/Text/text";
import Buttons from "../button/button";

//Styles
import { Section, Image, HiddenSection } from "./home.styles";
import "./home.css";

//Assets
import me from "../../assets/me5.png";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <Image src={me} alt="" />
        <HiddenSection>
          <Text type="p">click!</Text>
        </HiddenSection>
      </div>

      <Section>
        <Text type="h3" weight="thin" align="center" decoration="underline">
          Sobre mim
        </Text>
        <br />
        <Text type="c1" align="center">
          Oi! Eu me chamo Victor, sou desenvolvedor de software de Niterói, Rio
          de Janeiro. Trabalho com desenvolvimento de aplicações bonitas e
          performáticas como esse aqui. Tenho experiência com desenvolvimento,
          trabalho em equipe e elaboração de projetos. Dá uma olhadinha aí :)
        </Text>
      </Section>
      <Buttons />
    </div>
  );
}

export default Home;
