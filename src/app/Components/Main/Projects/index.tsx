import projects from "@/config/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <div className="mx-auto md:p-6 px-4 md:my-5">
      <div className="md:flex flex-wrap justify-between">
        {
          projects.map((project, index) => (
            <ProjectCard key={index} id={project.id} liveLink={project.liveLink || "null"} githubLink={project.githubLink || "null"} imageSrc={project.imagesrc} title={project.title} />
          ))
        }
      </div>
    </div>
  );
}

export default Projects;
