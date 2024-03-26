//Styles
import "./projects.css";

//Data
import { projectsData } from "./data";

//Types
import { IProjects } from "./projects.types";

export const Projects = () => {

const renderProjects = () =>
  projectsData.map((project: IProjects) => (
    <div className="project" key={project.link}>
      <div className="project-image">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt="" />
        </a>
      </div>
      <div className="project-content">
        <p>{project.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container-project">
      <div>
        <span className="quali-text">Projetos</span>
      </div>
      {renderProjects()}
    </div>
  );
};