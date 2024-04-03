//Components
import Text from "../../../components/Text/text";

//Styles
import { ContactCard } from "../contact.styles";
import { colors } from "../../../styles/colors";

//Types
import { IContacsData } from "../contact.types";
import { MotionProps } from "framer-motion";

const hoverAnimation: MotionProps = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.4 },
      backgroundColor: colors.whiteShade,
    },
  };

export const handleContacts = (contacts: IContacsData[]) =>
    contacts.map((contact: IContacsData) => (
      <ContactCard key={contact.name} href={contact.link} target={"blank"} {...hoverAnimation}>
        {contact.icon}
        <Text type="h4" weight="thin">
          {contact.socialName}
        </Text>
        <Text type="c1" weight="thin" color={colors.secondaryLight}>
          {contact.name}
        </Text>
      </ContactCard>
    ));
