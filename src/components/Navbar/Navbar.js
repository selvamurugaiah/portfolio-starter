import React from "react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar(){
    
    return(
        <div className="n-wrapper" >
            <div className="n-left">
                <div className="n-name">Selvam</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                   
                    <ul style={{listStyleType:'none'}}>
                         <li className="menu"> <AiOutlineMenu/></li>
                        <Link spy={true} to="Navbar" smooth={true} className="active">
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='About' smooth={true}>
                        <li>About</li>
                        </Link>
                        <Link spy={true} to='Education' smooth={true}>
                        <li>Education</li>
                        </Link> 
                        <Link spy={true} to='Skills' smooth={true}>
  
                        <li>Skills</li>
                         </Link>
                         <Link spy={true} to='Projects' smooth={true}>
                         <li>Projects</li>
                         </Link>
                         <Link spy={true} to='Contact' smooth={true}>
                         <li  className="button n-button">Contact</li>
                         </Link>
    
                    </ul>
                </div>
            </div>
        </div>
    )
}