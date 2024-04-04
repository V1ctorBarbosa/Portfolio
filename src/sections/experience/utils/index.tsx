//Styles
import { CardContainer, Section } from "../experience.styles";
import { colors } from "../../../styles/colors";

//Component
import Text from "../../../components/Text/text";

//Types
import { IDataExperience } from "../experience.types";
import { MotionProps } from "framer-motion";
import { IThemes } from "../../../styles/types";

const hoverAnimation: MotionProps = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.4 },
    backgroundColor: colors.darkShade,
  },
};

const selectedColor = (theme: IThemes) => {
  if (theme.theme.id == "light") return "#FBDFDB";
  else return "#EBEBEB";
};

export const handleExperiences = (
  experiences: IDataExperience[],
  theme: IThemes
) =>
  experiences.map((experience: IDataExperience) => (
    <CardContainer key={experience.assignments} {...hoverAnimation}>
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
