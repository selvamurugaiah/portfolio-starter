import React from "react";
import "./Education.css"
import { IoIosSchool } from "react-icons/io";

import { AiFillBulb } from "react-icons/ai";
import Experience from "../Card/ProjectCard";
import Card from "../Card/Card";


 
const Education = ()=>{
    return(
        <div className="education" id="Education">
            <h1 className="e-heading"id="e-journey">My <span className="e-journey">Journey</span></h1>
            <div className="edu-left">
                <div>
                <h2 className="edu-heading"><IoIosSchool/>Education</h2>
            <div className="degree">
            <Card
               university ={"Dr.Sivanthi Aditanar Collage of Engineering"}
               degree = {"Bachlor of Engineering in Mechanical"}
               year ={"2012-2013"}
               percentage = { "Completed with first class-76%"}
               />
            </div>
            <div className="hsc">
               <Card
               university ={"Sri Parmakalyani H.S.S"}
               degree = {"HSC"}
               year ={"2013-2015"}
               percentage = { "Completed with first class-80.4%"}
               />
               </div>
               <div className="sslc">
               <Card
               university ={"Sri Parmakalyani H.S.S"}
               degree = {"SSLC"}
               year ={"2012-2013"}
               percentage = { "Completed with first class-89.4%"}
               />
               </div> 
            
            </div>


                </div>
        
            <div className="edu-right">
            <h2 className="ex-heading"><AiFillBulb/>Experience</h2>
            <div className="experience">
            <Experience
              company ={"GlobeTech Industrial Solution Private Limited"}
               role = {"Design Engineer"}
               year ={"2020-2022"}
               place = { "Ambattur,Chennai"}
               />
            </div>
           
            </div>
    
            
        </div>
    )
}
export default Education