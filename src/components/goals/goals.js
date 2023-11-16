import React, {useState} from "react";
import "./goals.css";
const Goals = ({title, goals, type}) => {
    return (
        <div className="goal">
            {type === "title" ? <h2> {title} </h2> : <p> {title} </p>}
            {goals.map((goal, index) => {
                return <li key={index}>{goal}</li>
            })}
        </div>
    )
} 
export default Goals