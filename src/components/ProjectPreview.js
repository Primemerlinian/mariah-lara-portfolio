import { projects } from "../data/projects";

const ProjectPreview = (props) => {
  return (
    <div className="project-container">
    <p className="project"> {projects[0].title}</p>
    <p>{projects[0].description}</p>
    <img src={projects[0].image} alt={props.title}className="projectphoto"></img>
    <p>{projects[0].tech}</p>
    <a href="https://github.com/Primemerlinian/AskMeCoffee.git" className="buttonlink2"> github </a>
    <a href="https://askmecoffee.fly.dev/" className="buttonlink3"> deployed app </a>
    </div>
  )
}

export default ProjectPreview;