import React from "react";
import "./home.css";
import Goals from "../../components/goals/goals";   
import { ABOUT_ME, INTRO, SHORT_TERM_GOALS, FIVE_YEAR_GOALS, LIFE_VISION } from "../../constants";

const HomePage = () => {
    return (
        <div className="home-page">
            <h2 className="intro">{INTRO}</h2>
            <p>{ABOUT_ME}</p>

            <Goals title="Short term goals" goals={SHORT_TERM_GOALS} type="title"/>
            <Goals title="Five year goals" goals={FIVE_YEAR_GOALS} type="title"/>
            <Goals title="Long term goals" goals={LIFE_VISION} type="title"/>
          
        </div>
    )
}

export default HomePage