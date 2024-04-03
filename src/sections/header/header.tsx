//React
import { useEffect } from 'react';

//Component
import Text from '../../components/Text/text';

//Styles
import { Container } from './header.styles';

//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation } from "../../styles/types";

function Header() {

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
      id="home"
      variants={animationVariants as any}
    >
      <Text type='h1' align='center'>VICTOR BARBOSA</Text>
      <Text type='c1' weight='thin' decoration='underline'>Desenvolvedor Web</Text>
    </Container>
  );
}
export default Header;
