//Styles
import { CardContainer, Section } from "../experience.styles";
import { colors } from "../../../styles/colors";

//Component
import Text from "../../../components/Text/text";

//Types
import { IDataExperience } from "../experience.types";
import { MotionProps } from "framer-motion";

const hoverAnimation: MotionProps = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.4 },
    backgroundColor: colors.darkShade,
  },
};

export const handleExperiences = (experiences: IDataExperience[]) =>
experiences.map((experience: IDataExperience) => (
  <CardContainer key={experience.assignments} {...hoverAnimation}>
    <Section>
      <Text type="h3">{experience.companyName}</Text>
      <Text type="h4" weight="thin">
        {experience.ocupation}
      </Text>
      <Text type="c1" weight="thin">
        {experience.timePeriod}
      </Text>
    </Section>
    <Section>
      <Text type="p">{experience.assignments}</Text>
    </Section>
  </CardContainer>
));