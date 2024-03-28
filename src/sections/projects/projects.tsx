//Styles
import {
  Container,
  Header,
  ProjectSection,
  ProjectIcon,
  ProjectText,
} from "./projects.styles";
import { colors } from "../../styles/colors";

//Components
import Text from "../../components/Text/text";
import { HoverIcon } from "./components/HoverIcon/hoverIcon";

//Icons
import { Code } from "lucide-react";

//Data
import { projectsData } from "./data/data";

//Types
import { IProjects } from "./projects.types";

const Projects = () => {

  const renderProjects = () =>
    projectsData.map((project: IProjects) => (
      <ProjectSection key={project.appLink} href={project.appLink} target="_blank">
        <ProjectIcon>
          <HoverIcon
            defaultIcon={project.icon}
            hoverIcon={<Code size={64} color={colors.main} />}
            alternativeLink={project.codeLink}
          />
        </ProjectIcon>
        <ProjectText>
          <Text type="c1" align="center" weight="thin" color={colors.main}>
            {project.description}
          </Text>
        </ProjectText>
      </ProjectSection>
    ));

  return (
    <Container>
      <Header>
        <Text
          type="h3"
          weight="thin"
          align="center"
          decoration="underline"
          color={colors.secondary}
        >
          Projetos
        </Text>
      </Header>
      {renderProjects()}
    </Container>
  );
};

export default Projects;
