//Styles
import { ProjectSection, ProjectIcon, ProjectText } from "../projects.styles";

//Components
import Text from "../../../components/Text/text";
import { HoverIcon } from "../components/HoverIcon/hoverIcon";

//Icons
import { Code } from "lucide-react";

//Data
import { projectsData } from "../data/data";

//Types
import { IProjects } from "../projects.types";
import { MotionProps } from "framer-motion";
import { IThemess } from "../../../styles/types";

//Context
import { useTheme } from "../../../context/context";

const hoverAnimation: MotionProps = {
  whileHover: { scale: 1.05, transition: { duration: 0.4 } },
};

const selectedColor = (theme: IThemess) => {
  if (theme.theme.id == "light") return "#F16D82";
  else return "#1E1E1E";
};

export const renderProjects = () => {
  const theme = useTheme();

  return projectsData(selectedColor(theme)).map((project: IProjects) => (
    <ProjectSection
      key={project.appLink}
      href={project.appLink}
      target="_blank"
      {...hoverAnimation}
    >
      <ProjectIcon>
        <HoverIcon
          defaultIcon={project.icon}
          hoverIcon={<Code size={64} color={selectedColor(theme)} />}
          alternativeLink={project.codeLink}
        />
      </ProjectIcon>
      <ProjectText>
        <Text
          type="c1"
          align="center"
          weight="thin"
          color={selectedColor(theme)}
        >
          {project.description}
        </Text>
      </ProjectText>
    </ProjectSection>
  ));
};
