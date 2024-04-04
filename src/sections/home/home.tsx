//React
import { useEffect } from "react";

//Components
import Text from "../../components/Text/text";
import Buttons from "../button/button";

//Styles
import { Section, Image } from "./home.styles";
import "./home.css";

//Assets
import me from "../../assets/me.png";

//Animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation } from "../../styles/types";

function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animationVariants: IOnViewAnimation = onViewAnimation("-5%");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants as any}
      className="container home-container"
    >
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
    </motion.div>
  );
}

export default Home;
