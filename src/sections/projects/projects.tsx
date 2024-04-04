//Styles
import { Container, Header } from "./projects.styles";

//Components
import Text from "../../components/Text/text";

//Utils
import { renderProjects } from "./utils";

//Context
import { useTheme } from "../../context/context";

const Projects = () => {
  const theme = useTheme();
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
      {renderProjects()}
    </Container>
  );
};

export default Projects;
