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

//Data
import { projectsData } from "./data";

//Types
import { IProjects } from "./projects.types";


const Projects = () => {
  const renderProjects = () =>
    projectsData.map((project: IProjects) => (
      <ProjectSection key={project.link} href={project.link} target="_blank">
<ProjectIcon>
  {project.image}
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
