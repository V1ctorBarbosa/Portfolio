//Components
import Text from "../../../components/Text/text";

//Styles
import { ContactCard } from "../contact.styles";
import { colors } from "../../../styles/colors";

//Types
import { IContacsData } from "../contact.types";
import { MotionProps } from "framer-motion";
import { IThemes } from "../../../styles/types";

const hoverAnimation: MotionProps = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.4 },
      backgroundColor: colors.whiteShade,
    },
  };

  const selectedColor = (theme: IThemes) => {
    if (theme.theme.id == "light") return "#FBDFDB";
    else return "#EBEBEB";
  };

export const handleContacts = (contacts: IContacsData[], theme: IThemes) =>
    contacts.map((contact: IContacsData) => (
      <ContactCard key={contact.name} href={contact.link} target={"blank"} {...hoverAnimation}>
        {contact.icon}
        <Text type="h4" weight="thin">
          {contact.socialName}
        </Text>
        <Text type="c1" weight="thin" color={selectedColor(theme)}>
          {contact.name}
        </Text>
      </ContactCard>
    ));
