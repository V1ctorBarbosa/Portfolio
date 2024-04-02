//Styles
import { Container, CardContainer, Section } from "./experience.styles";
import { colors } from "../../styles/colors";

//Data
import { dataExperience } from "./data/data";

//Components
import Text from "../../components/Text/text";

//Types
import { IDataExperience } from "./experience.types";
import { MotionProps } from "framer-motion";

function Experience() {

    const hoverAnimation: MotionProps = {
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.4 },
          backgroundColor: colors.darkShade,
        },
      };

    const handleExperiences = (experiences: IDataExperience[]) =>
    experiences.map((experience: IDataExperience) => (
        <CardContainer key={experience.assignments} {...hoverAnimation}>
            <Section>
                <Text type='h3'>{experience.companyName}</Text>
                <Text type='h4' weight="thin">{experience.ocupation}</Text>
                <Text type='c1' weight="thin">{experience.timePeriod}</Text>
            </Section>
            <Section>
                <Text type='p'>{experience.assignments}</Text>
            </Section>
        </CardContainer>
    ))

  return (
    <Container>
        <Text
          type="h3"
          weight="thin"
          align="center"
          decoration="underline"
          color={colors.secondary}
        >
          Experiência
        </Text>
        {handleExperiences(dataExperience)}
    </Container>
  );
}

export default Experience;
