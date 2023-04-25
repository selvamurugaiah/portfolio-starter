import React from "react"
import foodzie from '../../img/foodzie.png';
import stuTecManage from '../../img/stuTecManage.png';
import admin from '../../img/admin.png';
import ecommerce from '../../img/ecommerce.png';
import priceCart from '../../img/priceCart.png';
import ProjectCard from "./ProjectCard";
import kural from "../../img/kural.png"
import './Project.css'


export default function ProjectDetails(){
    return(
        <div className="project-list" id="Projects">
            <div className="headers">
                <h1 style={{fontSize:"2rem"}}>Projects</h1>
            </div>
            <div className="project-details">
                <div className="first-set">
            <ProjectCard
              img={foodzie}
              title={"Foodzie-App"}
              content={"A continental Recipe App, easy to make your favorite recipe on your own."}
              code ={"https://github.com/selvamurugaiah/Promise-Task/tree/main/Task-3"}
              live ={"https://super-cactus-60e568.netlify.app/"}
            />
              <ProjectCard
              img={admin}
              title={"Admin-Dashboard"}
              content={"Admin dashbord using react it is just a simple replica of admin dashboard. In this we can add users by just filling the details."}
              code ={"https://github.com/selvamurugaiah/admin-app"}
              live ={"rad-sopapillas-d134f7.netlify.app/"}
            />
                <ProjectCard
              img={ecommerce}
              title={"E-Commerce-Site"}
              content={"Cart design representing front end design for eCommerce site"}
              code ={"https://github.com/selvamurugaiah/Day24-Cart-Task"}
              live ={"https://friendly-semifreddo-e41e2f.netlify.app/"}
            />
            </div>
            <div className="second-set">
            <ProjectCard
              img={stuTecManage}
              title={"Student-Teacher-Management"}
              content={"This web is build by using react in which we can add users, see user profiles and we can set the type of user as student/teacher"}
              code ={"https://github.com/selvamurugaiah/crud-fetch-app"}
              live ={"fantastic-florentine-756292.netlify.app/"}
            />
              <ProjectCard
              img={kural}
              title={"Kural-Dictionary"}
              content={"Search your kural number and learnit.Dictionary it have tamil and engilsh meanings"}
              code ={"https://github.com/selvamurugaiah/admin-app"}
              live ={"rad-sopapillas-d134f7.netlify.app/"}
            />
             <ProjectCard
              img={priceCart}
              title={"Price-Cart"}
              content={"Price-Cart is representing subscription details to get plan"}
              code ={"https://github.com/selvamurugaiah/price-cart"}
              live ={"wonderful-custard-b1e94c.netlify.app/"}
            />

            </div>
            <div className="second-set">
           
          

            </div>
            
            </div>
            
            </div>

            )}
           