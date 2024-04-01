import "./footer.css";

//Components
import Text from "../../components/Text/text";

//Styles
import {
  SocialMidiaSection,
  SocialMidiaIcon,
  Container,
  Header,
  ScrollUp,
} from "./footer.styled";
import { colors } from "../../styles/colors";
import { Mouse } from "lucide-react";

//Types
import { ISocialMidiaData } from "./footer.types";
import { MotionProps } from "framer-motion";

//Data
import { socialMidiaData } from "./data/data";

function Footer() {

  const hoverAnimation: MotionProps = {
    whileHover: {
      transition: { duration: 0.4 },
      backgroundColor: colors.darkShade,
    },
  };

  const handleSocialMidia = (socialMidias: ISocialMidiaData[]) =>
    socialMidias.map((socialMidia: ISocialMidiaData) => (
      <SocialMidiaIcon {...hoverAnimation} href={socialMidia.link} target="__blank">
        {socialMidia.icon}
      </SocialMidiaIcon>
    ));

  return (
    <Container>
      <Header>
        <Text type="h4" weight="thin" align="center">
          Obrigado por estar aqui ^^
        </Text>
        <ScrollUp href="#home" {...hoverAnimation}>
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
