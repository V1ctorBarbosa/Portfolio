//React
import { useEffect } from "react";

//Styles
import { Container, ContactsSection } from "./contact.styles";

//Data
import { contactsData } from "./data/data";

//Utils
import { handleContacts } from "./utils";

//Components
import Text from "../../components/Text/text";

//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { onViewAnimation } from "../../styles/animation";

//Types
import { IOnViewAnimation, IThemes } from "../../styles/types";

function Contact(theme: IThemes) {

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
      id='contact'
      variants={animationVariants as any}
    >
      <Text
        type="h3"
        weight="thin"
        align="center"
        decoration="underline"
        color={theme.id == 'light' ? '#FBDFDB' : '#EBEBEB'}
      >
        Fale Comigo!
      </Text>
      <ContactsSection>{handleContacts(contactsData, theme)}</ContactsSection>
    </Container>
  );
}

export default Contact;
