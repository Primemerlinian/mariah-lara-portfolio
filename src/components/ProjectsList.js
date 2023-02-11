import ProjectPreview from "./ProjectPreview";
import { projects } from "../data/projects";

const ProjectsLists = (props) => {
  return (
    <div classname="project-container">
      <ProjectPreview projects={projects} />
    </div>
  );
};

export default ProjectsLists;
