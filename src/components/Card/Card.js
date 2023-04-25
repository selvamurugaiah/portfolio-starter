import React from "react";
import "./Card.css";
import { AiFillCalendar } from "react-icons/ai";

const Card = ({university,degree,year,percentage})=>{   
    
    return(
        <div className="card">
            <div className="e-card">
            <div className="e-border">
            <span className="clg">{university}</span>
             <span style={{fontWeight:"500"}}>{degree}</span>
             <span ><button className="badge"><AiFillCalendar/>{year}</button></span>
             <span className="percentage">{percentage}</span>
                
            </div>    
            

            </div>
           
        </div>
    )
}

export default Card