//Components
import Text from "../../components/Text/text";

//Styles
import {
  SocialMidiaSection,
  Container,
  Header,
  ScrollUp,
} from "./footer.styled";
import { Mouse } from "lucide-react";

//Utils
import { handleSocialMidia, hoverAnimation } from "./utils";

//Data
import { socialMidiaData } from "./data/data";

//Context
import { useTheme } from "../../context/context";

function Footer() {

  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Text type="h4" weight="thin" align="center">
          Obrigado por estar aqui ^^
        </Text>
        <ScrollUp href="#home" {...hoverAnimation(theme)}>
          <Mouse size={40}/> <Text type="c2" weight="thin">- subir -</Text>
        </ScrollUp>
      </Header>
      <SocialMidiaSection>
        {handleSocialMidia(socialMidiaData)}
      </SocialMidiaSection>
    </Container>
  );
}
export default Footer;
