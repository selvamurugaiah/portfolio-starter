import React from "react";
import "./About.css"
import { themeContext } from '../../context';
import {useContext} from 'react'
import star from '../../img/star.gif';
import men from '../../img/men.png';
export default function About(){
    const theme = useContext(themeContext)
    const darkMode =theme.state.darkMode;
    return(
        <div className="about" id="About">
            <div className="a-left" style={{color:darkMode?'black':'black'}}>
            <div>
            <h1 className="a-heading" >About</h1>
           
           <h1 className="a-name"><img src={star} className="star"/>I'm  Selvam</h1>
           <p className="description">
           <img src={star} className="star"/>Am a MERN Stack Developer from Tirunelveli,
            Tamil Nadu in India. 
            I love to create web apps that would make life easy and enjoyable for people. 
            I have just completed MERN Stack at Guvi Geeks of IIT-Madras and IIT-Ahamadabad incubated company</p>

            <p className="description"><img src={star} className="star"/> 
            Looking forward to showcasing and utilizing
             my current skill set and experience of working on 
             projects to grow and achieve organizational goals.</p>
            </div>
             </div>
            <div className="a-right">
                <div className="men">
                <img src={men} className="men"/>
                </div>
                
                
           </div> 
                 
        </div>
    )
}