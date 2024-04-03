//React
import { useEffect } from "react";

//Components
import Text from "../../components/Text/text";

//Utils
import { handleCards } from "./utils";

//Styles
import {
  Container,
  Header,
  CardContainer
} from "./cards.styles";
import { colors } from "../../styles/colors";

//Data
import { cardsData } from "./data/data";

//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation } from "../../styles/types";

const Cards = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animationVariants: IOnViewAnimation = onViewAnimation("-5%");

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [inView])

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants as any}
    >
      <Header>
        <Text
          type="h3"
          weight="thin"
          align="center"
          decoration="underline"
          color={colors.secondary}
        >
          Tecnologias
        </Text>
      </Header>
      <CardContainer>{handleCards(cardsData)}</CardContainer>
    </Container>
  );
};

export default Cards;
