//Styles
import { colors } from "../../styles/colors";
import { Container, ContactsSection } from "./contact.styles";

//Data
import { contactsData } from "./data/data";

//Utils
import { handleContacts } from "./utils";

//Components
import Text from "../../components/Text/text";

function Contact() {

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
