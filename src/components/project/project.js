import React from "react";
import "./project.css";
import Goals from "../../components/goals/goals";
const Project = ({name, description, technologies, link, img_path}) => {

    const checkPersonalProject = (link) => {
        window.location.href = link;
    }

    return (
        <div className="project" onClick={(event) => checkPersonalProject(link)}>
            <a href={link}>{name}</a>
            <Goals title={description} goals={technologies} type="description"/>
            <hr/>

            <img src={img_path}  alt="project image"/>
        
        </div>
    )
}

export default Project