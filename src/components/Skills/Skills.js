import SkillCard from "./SkillCard";
import "./Skills.css"
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {DiCss3, DiNodejs} from "react-icons/di";
import {SiBootstrap, SiJavascript, SiMongodb, SiMysql, SiPostman, SiRedux} from "react-icons/si";
import {RiReactjsFill} from "react-icons/ri";

export default function Skills(){
    return(
        <div className="list" id="Skills">
            <div className="headers">
                <h1 style={{fontSize:"2rem"}}>Skills</h1>
            </div>
            <div className="skillset">
                <div className="first-set">
            <SkillCard
            icons={<AiFillHtml5 size={60} />}
            name={"HTML"}
            />
               <SkillCard
            icons={<DiCss3 size={60}/>}
            name={"CSS"}
            />
               <SkillCard
            icons={<SiJavascript size={60}/>}
            name={"JavaScript"}
            />
           
               <SkillCard
            icons={<SiBootstrap size={60}/>}
            name={"Bootstrap"}
            />
             </div>
            <div className="second-set">
               <SkillCard
            icons={<RiReactjsFill size={60}/>}
            name={"ReactJs"}
            />
               <SkillCard
            icons={<SiRedux size={60}/>}
            name={"Redux"}
            />
           
               <SkillCard
            icons={<SiMysql size={60}/>}
            name={"MySQL"}
            />
            
               <SkillCard
            icons={<SiMongodb size={60}/>}
            name={"MongoDB"}
            />
             </div>
            <div className="third-set">
               <SkillCard
            icons={<DiNodejs size={60}/>}
            name={"NodeJs"}
            />
            
               <SkillCard
            icons={<SiPostman size={60}/>}
            name={"Postman"}
            />
                 <SkillCard
            icons={"ex"}
            name={"ExpressJs"}
            />
                   <SkillCard
            icons={<AiFillGithub size={60}/>}
            name={"Github"}
            />
            </div>
            </div>

        </div>
    )
}
