import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import Typical from "react-typical";
import './Intro.css'
import robot from '../../img/robot.png';
import Crown from '../../img/crown.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from '../../context';
import {useContext} from 'react'



  const Intro =()=>{
      
    const transition = {duration:2, type:'spring'}
     
    const theme = useContext(themeContext)
    const darkMode =theme.state.darkMode;
    return(
        <div className="intro" id="Navbar">
        <div className="i-left">
             
            <div className="i-name">
                <span style={{color:darkMode?'white':'white'}}>Hi all, I'm </span>
                <span>Selvam</span>
                <div className="role">
                    <span className="text">
                        {" "}
                        <h1 >
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Full Stack Developer 🧑‍💻",
                                1000,
                                "Front-End Developer 🧑‍💻",
                                1000,
                                "Back-End Developer 🧑‍💻",
                                1000,
                                "MERN Stack Developer 🧑‍💻",
                                1000
                            ]}
                            />
                        </h1>
                        </span>
                        </div>
                        <span className="description">
                        A Mechanical Engineer turned Web Developer, 
                        Passionate towards new creation and keeping myself up to Date on techs
                        </span>
                     <br/>
                    <div className="colz-icons">
                       
                    <a href="https://github.com/selvamurugaiah"><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/selvam-m-434676258/"><BsLinkedin/></a>
                    <a href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=selvamurugaiah100@gmail.com"><AiOutlineMail/></a>
                    </div>
                  
            </div>
         
            <a href='selva.pdf' download='selva.pdf'>
                        
                        <button className="button">Get Resume</button>
                        </a>
        </div>
        
      
        <div className="i-right">
          
           <img src={robot} alt="" className="robot"/>
           <div style={{top:'-4%',left:'68%'}} id="i-card">
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>
            {/*blur*/}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background:"#C1F5FF",
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
        
        }}>

            </div>
        </div>
        </div>
    )
}
export default Intro