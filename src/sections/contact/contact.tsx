//Styles
import { colors } from "../../styles/colors";
import { ContactCard, Container, ContactsSection } from "./contact.styles";

//Data
import { contactsData } from "./data/data";

//Types
import { IContacsData } from "./contact.types";
import { MotionProps } from "framer-motion";

//Components
import Text from "../../components/Text/text";

function Contact() {
  const hoverAnimation: MotionProps = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.4 },
      backgroundColor: "rgba(255, 255, 255, 0.096)",
    },
  };

  const handleContacts = (contacts: IContacsData[]) =>
    contacts.map((contact: IContacsData) => (
      <ContactCard href={contact.link} target={"blank"} {...hoverAnimation}>
        {contact.icon}
        <Text type="h4" weight="thin">
          {contact.socialName}
        </Text>
        <Text type="c1" weight="thin" color={colors.secondaryLight}>
          {contact.name}
        </Text>
      </ContactCard>
    ));

  return (
    <Container>
      <Text
        type="h3"
        weight="thin"
        align="center"
        decoration="underline"
        color={colors.secondary}
      >
        Fale Comigo!
      </Text>
      <ContactsSection>{handleContacts(contactsData)}</ContactsSection>
    </Container>
  );
}

export default Contact;
