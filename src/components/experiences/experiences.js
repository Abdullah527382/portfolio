import React from "react";
import { EXPERIENCE_LIST } from "../../constants";
import Experience from "../experience/experience";
import "./experiences.css";

const Experiences = () => {
    return (
        <div className="experiences">
            <div className="experience-list">
                {EXPERIENCE_LIST.map((experience, index) => (
                    <Experience experience={experience} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Experiences;