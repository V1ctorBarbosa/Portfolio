//Styles
import { Container, Header, ProjectSection, ProjectImg } from "./projects.styles";
import { colors } from "../../styles/colors";
import "./projects.css";

//Components
import Text from "../../components/Text/text";

//Data
import { projectsData } from "./data";

//Types
import { IProjects } from "./projects.types";

const Projects = () => {

  const renderProjects = () =>
  projectsData.map((project: IProjects) => (
    <ProjectSection key={project.link}>
      <div className="project-image">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <ProjectImg src={project.image} alt="" />
        </a>
      </div>
      <div className="project-content">
        <Text type="c1" align="center" weight="thin" color={colors.main}>
          {project.description}
        </Text>
      </div>
    </ProjectSection>
  ));

  return (
    <Container>
      <Header>
        <Text type="h3" weight="thin" align="center" decoration="underline" color={colors.secondary}>
          Projetos
        </Text>
      </Header>
      {renderProjects()}
    </Container>
  );
};

export default Projects;
