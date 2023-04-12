import { projects } from "../data/projects";

const ProjectPreview = (props) => {
  return (
    <>
      <div className="project-container">
        <p className="project"> {projects[0].title}</p>
        <p>{projects[0].description}</p>
        <img
          src={projects[0].image}
          alt={props.title}
          className="projectphoto"
        ></img>
        <p>{projects[0].tech}</p>
        <a
          href="https://github.com/Primemerlinian/PlanPro-front-end"
          className="buttonlink2"
        >
          {" "}
          Github{" "}
        </a>
        <a
          href="https://planpro.netlify.app/"
          className="buttonlink3"
        >
          {" "}
          Deployed app{" "}
        </a>
      </div>
      <div className="project-container">
        <p className="project"> {projects[1].title}</p>
        <p>{projects[1].description}</p>
        <img
          src={projects[1].image}
          alt={props.title}
          className="projectphoto"
        ></img>
        <p>{projects[1].tech}</p>
        <a
          href="https://github.com/Primemerlinian/AskMeCoffee.git"
          className="buttonlink2"
        >
          {" "}
          Github{" "}
        </a>
        <a href="https://askmecoffee.fly.dev/" className="buttonlink3">
          {" "}
          Deployed app{" "}
        </a>
      </div>
      <div className="project-container">
        <p className="project"> {projects[2].title}</p>
        <p>{projects[2].description}</p>
        <img
          src={projects[2].image}
          alt={props.title}
          className="projectphoto"
        ></img>
        <p>{projects[2].tech}</p>
        <a
          href="https://github.com/Primemerlinian/Beauty"
          className="buttonlink2"
        >
          {" "}
          Github{" "}
        </a>
        <a href="https://beauty-simulator.netlify.app/" className="buttonlink3">
          {" "}
          Deployed app{" "}
        </a>
      </div>

      <div className="project-container">
        <p className="project"> {projects[3].title}</p>
        <p>{projects[3].description}</p>
        <img
          src={projects[3].image}
          alt={props.title}
          className="projectphoto"
        ></img>
        <p>{projects[3].tech}</p>
        <a
          href="https://github.com/Primemerlinian/Connect4"
          className="buttonlink2"
        >
          {" "}
          Github{" "}
        </a>
        <a
          href="https://mariah-lara-connect-4.netlify.app/"
          className="buttonlink3"
        >
          {" "}
          Deployed app{" "}
        </a>
      </div>

      <div className="project-container">
        <p className="project"> {projects[4].title}</p>
        <p>{projects[4].description}</p>
        <img
          src={projects[4].image}
          alt={props.title}
          className="projectphoto"
        ></img>
        <p>{projects[4].tech}</p>
        <a
          href="https://github.com/Primemerlinian/ttt-weekend.git"
          className="buttonlink2"
        >
          {" "}
          Github{" "}
        </a>
        <a
          href="https://pixel-toe-mariah-lara.netlify.app/"
          className="buttonlink3"
        >
          {" "}
          Deployed app{" "}
        </a>
      </div>
    </>
  );
};

export default ProjectPreview;
