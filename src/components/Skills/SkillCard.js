import React from "react";


export default function SkillCard({icons,name}){
    return(
        <div className="skills">
            <div className="design">
            <span className="icons">{icons}</span>
            <h1 className="s-name">{name}</h1>
            </div>
        </div>

    )
}