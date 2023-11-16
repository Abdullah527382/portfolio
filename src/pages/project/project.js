import React from "react";
import { PROJECT_LIST } from "../../constants";
import Project from "../../components/project/project";
import "./project.css";
const ProjectPage = () => {
    return (
        <div className="project-page">
            {PROJECT_LIST.map((project) =>
                <Project name={project.name} description={project.description} technologies={project.technologies} link={project.link} img_path={project.img_path} />
            )}
        </div>
    )
}

export default ProjectPage