//Styles
import { CardContainer, Section } from "../experience.styles";
import { colors } from "../../../styles/colors";

//Component
import Text from "../../../components/Text/text";

//Types
import { IDataExperience } from "../experience.types";
import { MotionProps } from "framer-motion";
import { IThemes, IThemess } from "../../../styles/types";

//Context
import { useTheme } from "../../../context/context";

const hoverAnimation = (theme: IThemess): MotionProps => {
  const shadow = theme.theme.id == 'dark' ? colors.whiteShade : colors.darkShade
  return {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.4 },
      backgroundColor: shadow
    },
  }
};

const selectedColor = (theme: IThemes) => {
  if (theme.id == "light") return "#FBDFDB";
  else return "#EBEBEB";
};

export const handleExperiences = (experiences: IDataExperience[]) => {
  const theme = useTheme();

  return experiences.map((experience: IDataExperience) => (
    <CardContainer key={experience.assignments} {...hoverAnimation(theme)}>
      <Section>
        <Text type="h3" color={selectedColor(theme)}>
          {experience.companyName}
        </Text>
        <Text type="h4" weight="thin" color={selectedColor(theme)}>
          {experience.ocupation}
        </Text>
        <Text type="c1" weight="thin" color={selectedColor(theme)}>
          {experience.timePeriod}
        </Text>
      </Section>
      <Section>
        <Text type="p">{experience.assignments}</Text>
      </Section>
    </CardContainer>
  ));
};
