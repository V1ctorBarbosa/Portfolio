//React
import { useEffect } from "react";

//Styles
import { Container } from "./experience.styles";

//Data
import { dataExperience } from "./data/data";

//Utils
import { handleExperiences } from "./utils";

//Components
import Text from "../../components/Text/text";

//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation } from "../../styles/types";

//Context
import { useTheme } from "../../context/context";

function Experience() {
  const theme = useTheme()
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animationVariants: IOnViewAnimation = onViewAnimation("5%");

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
      id='experience'
      variants={animationVariants as any}
    >
      <Text
        type="h3"
        weight="thin"
        align="center"
        decoration="underline"
        color={theme.id == 'light' ? '#FBDFDB' : '#EBEBEB'}
      >
        Experiência
      </Text>
      {handleExperiences(dataExperience)}
    </Container>
  );
}

export default Experience;
