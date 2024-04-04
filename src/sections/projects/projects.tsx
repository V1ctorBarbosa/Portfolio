//Styles
import { Container, Header } from "./projects.styles";

//Components
import Text from "../../components/Text/text";

//Utils
import { renderProjects } from "./utils";

//Types
import { IThemes } from "../../styles/types";

const Projects = (theme: IThemes) => {
  return (
    <Container>
      <Header>
        <Text
          type="h3"
          weight="thin"
          align="center"
          decoration="underline"
          color={theme.id == "light" ? "#FBDFDB" : "#EBEBEB"}
        >
          Projetos
        </Text>
      </Header>
      {renderProjects(theme)}
    </Container>
  );
};

export default Projects;
