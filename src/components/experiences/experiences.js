import React from "react";
import { EXPERIENCE_LIST } from "../../constants";
import Experience from "../experience/experience";
import "./experiences.css";
import { LineAxis } from "@mui/icons-material";

const Experiences = () => {
    return (
        <div className="experiences">
            <div className="experience-list">
                {EXPERIENCE_LIST.map((experience, index) => (
                    <div className="experience-node"> 
                        <Experience experience={experience} key={index} />
                        {
                            index !== EXPERIENCE_LIST.length - 1 ? 
                            <div className="vertical-line" > </div> : ""
                        
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences;