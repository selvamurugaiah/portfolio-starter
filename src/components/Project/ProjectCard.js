import React from "react";
import './Project.css'


export default function ProjectCard({img,title,content,code,live}){
    return(
        <div className="projects">
            <div className="design-card">
              <img src={img} className="project-img"></img>
              <span className="project-title">{title}</span>
              <p>{content}</p>
              <a href={code}> <button className="btn-p">Code</button></a>
              <a href={live}> <button className="btn-p">Live</button></a>
            </div>
        </div>

    )
}