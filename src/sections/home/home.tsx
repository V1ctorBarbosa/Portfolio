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
import Buttons from "../button/button";

//Assets
import me from "../../assets/me5.png";

function Home() {
  const [floatingIcons, setFloatingIcons] = useState(false);

  const calculateHorizontalPosition = (index: number) => {
    const distanceBetweenIcons = 500;
    return `${index * distanceBetweenIcons}px`;
  };

  const handleFloatingIcons = (floatingIcons: boolean) => {
    if (floatingIcons) {
      return (
        <FloatingIconsSection>
          <FloatingIcon content={'cachorro'}/>
        </FloatingIconsSection>
      );
    } else return;
  };

  return (
    <Container>
      <Main>
        <ProfileImg
          src={me}
          alt="Victor"
          onClick={() => setFloatingIcons(!floatingIcons)}
        />
                <FloatingIconsSection>
          {floatingIcons && (
            <>
              {[0, 1, 2, 3].map((index) => (
                <FloatingIcon
                  key={index}
                  top="-50px" // Define a mesma posição vertical para todos os ícones
                  left={calculateHorizontalPosition(index)} // Calcula a posição lateral baseada no índice
                />
              ))}
            </>
          )}
        </FloatingIconsSection>
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
