//React
import { useEffect } from "react";

//Components
import Text from "../../components/Text/text";

//Utils
import { handleCards } from "./utils";

//Styles
import { Container, Header, CardContainer } from "./techs.styles";

//Data
import { cardsData } from "./data/data";

//Context
import { useTheme } from "../../context/context";

//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation } from "../../styles/types";

const Techs = () => {
  const { theme } = useTheme();

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animationVariants: IOnViewAnimation = onViewAnimation("-5%");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      id="techs"
      variants={animationVariants as any}
    >
      <Header>
        <Text
          type="h3"
          weight="thin"
          align="center"
          decoration="underline"
          color={theme.id == "light" ? "#FBDFDB" : "#EBEBEB"}
        >
          Tecnologias
        </Text>
      </Header>
      <CardContainer>{handleCards(cardsData)}</CardContainer>
    </Container>
  );
};

export default Techs;
