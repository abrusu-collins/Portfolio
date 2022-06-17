import "../styles/skills.css";
import reeact from "./img/react.png";
import html from "./img/html.jpg";
import css from "./img/css.jpg";
import js from "./img/js.png";
import git from "./img/git.jpg";
import bootstrap from "./img/bootstrap.png";
import sass from "./img/sass.png";
import redux from "./img/redux.png";


function Skills() {
    return ( 
    <div className="skills">
   <h1>Technical Skills</h1>
  <div className="techskills">
    <ul>
        <li>
            <img src={html} alt="" />
            <p>HTML5</p>
            </li>
        <li>
            <img src={css} alt="" />
            <p>CSS3</p>
            </li>
        <li>
            <img src={js} alt="" />
            <p>JavaScript</p>
            </li>
        <li>
            <img src={sass} alt="" />
            <p>SASS</p>
            </li>
        
        
   
    <li>
        <img src={bootstrap} alt="" />
        
        <p>Bootstrap</p>
        </li>
        <li>
        <img src= {reeact}alt="react" />

          <p>  React</p></li>
        <li>
            <img src={redux} alt="" />
           <p> Redux</p>
            </li>
        <li>
            <img src={git} alt="" />
            <p>Git/GitHub</p>
            </li>
    </ul>
  </div>
    </div>
    
        );
}

export default Skills;