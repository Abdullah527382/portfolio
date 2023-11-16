import React, {useState} from "react";
import "./experience.css";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Experience = ({experience, index}) => {

    const [show, setShow] = useState(false);

    return (
        <div className="experience" key={index}>
            <div className="experience-header">
                <h1 style={{display: "inline-block"}}>
                {experience.title}  
                </h1>
                <h3 style={{display: "inline-block"}}> @ <a href={experience.url}>{experience.company}</a> ({experience.date}) 
                <ArrowDropDownCircleIcon style={show? {transform: "rotate(180deg)"}: {}} className="experience-icon" onClick={() => setShow(!show)}/>
                 </h3>
                 <p><strong>Technologies: </strong> {experience.technologies.map(
                        (technology, index) => (
                            <span key={index}>{technology} {
                                index !== experience.technologies.length - 1 ? 
                                <span> | </span> : ""
                            
                            } </span>
                        )
                 )}</p>
            </div>
            { show ?
                <div className="experience-description">
                {experience.responsibilities.map(
                    (responsibility, index) => (
                        <div className="experience-responsibility" key={index}>
                            <h3>{responsibility.projectName}</h3>
                            <p>
                                {responsibility.tasks.map(
                                    (task, index) => (
                                        <li key={index}>{task}</li>
                                    )
                        
                                )}
                            </p>
                        </div>
                    )
                )}
            </div> : ""
            }
        </div>
    )
}

export default Experience;