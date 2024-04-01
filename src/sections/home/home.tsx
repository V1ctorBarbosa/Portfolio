import "./home.css";

//React
import { useState } from "react";

//Styles
import {
  Container,
  FloatingIconsSection,
  Main,
  ProfileImg,
  Section,
} from "./home.styles";

//Components
import FloatingIcon from "./components/FloatingIcon/floatingIcon";
import Text from "../../components/Text/text";

import me from "../../assets/me5.png";
import Buttons from "../button/button";

function Home() {
  const [floatingIcons, setFloatingIcons] = useState(false);

  const handleFloatingIcons = (floatingIcons: boolean) => {
    if (floatingIcons) {
      return (
        <FloatingIconsSection>
          <FloatingIcon />
          <ProfileImg
          src={me}
          alt="eu"
          onClick={() => setFloatingIcons(!floatingIcons)}
        />
        </FloatingIconsSection>
      );
    } else {
      return (
        <FloatingIconsSection>
          <ProfileImg
          src={me}
          alt="eu"
          onClick={() => setFloatingIcons(!floatingIcons)}
        />
        </FloatingIconsSection>
      )
    };
  };

  return (
    <Container>
      <Main>
        {handleFloatingIcons(floatingIcons)}

      </Main>
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
    </Container>
  );
}

export default Home;
