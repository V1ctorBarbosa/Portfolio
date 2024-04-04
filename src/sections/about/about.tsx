//Components
import Projects from "../projects/projects";

//Styles
import { Container } from "./about.styles";

//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation, IThemes } from "../../styles/types";

function About(theme: IThemes) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animationVariants: IOnViewAnimation = onViewAnimation("5%");

  if (inView) {
    controls.start("visible");
  }

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      id='projects'
      variants={animationVariants as any}
    >
      <Projects theme={theme} />
    </Container>
  );
}
export default About;
