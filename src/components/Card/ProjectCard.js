import React from "react";
import "./Card.css";

import { AiFillCalendar } from "react-icons/ai";

const Experience = ({company,role,year,place})=>{   
    
    return(
        <div className="card">
            <div className="e-card">
            <div className="e-border">
            <span className="clg">{company}</span>
             <span style={{fontWeight:"500"}}>{role}</span>
             <span ><button className="badge"><AiFillCalendar/>{year}</button></span>
             <span className="percentage">{place}</span>
                
            </div>    
            

            </div>
           
        </div>
    )
}

export default Experience