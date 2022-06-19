import "../styles/skills.css";
import reeact from "./img/react.png";
import html from "./img/html.jpg";
import css from "./img/css.webp";
import js from "./img/js.png";
import git from "./img/git.jpg";
import bootstrap from "./img/bootstrap.png";
import sass from "./img/sass.png";
import redux from "./img/redux.png";

import AOS from 'aos';
import "aos/dist/aos.css";
function Skills() {
    AOS.init();
    return ( 
    <div className="skills" id="skills">
   <h1>Technical Skills</h1>
  <div className="techskills">
    <ul>
        <li data-aos={"fade-down"}>
            <img src={html} alt="" />
            <p>HTML5</p>
            </li>
        <li data-aos={"fade-up"}>
            <img src={css} alt=""   />
            <p>CSS3</p>
            </li>
        <li data-aos={"fade-down"}>
            <img src={js} alt="" />
            <p>JavaScript</p>
            </li>
        <li data-aos={"fade-up"}>
            <img src={sass} alt="" />
            <p>SASS</p>
            </li>
        
        
   
    <li data-aos={"fade-down"}>
        <img src={bootstrap} alt="" />
        
        <p>Bootstrap</p>
        </li>
        <li data-aos={"fade-up"}>
        <img src= {reeact}alt="react" />

          <p>  React</p></li>
        <li data-aos={"fade-down"}>
            <img src={redux} alt="" />
           <p> Redux</p>
            </li>
        <li data-aos={"fade-up"}>
            <img src={git} alt="" />
            <p>Git/GitHub</p>
            </li>
    </ul>
  </div>
    </div>
    
        );
}

export default Skills;