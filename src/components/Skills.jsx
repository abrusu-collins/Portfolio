import "../styles/skills.css";
import reeact from "./img/react.svg";
import html from "./img/html.svg";
import css from "./img/css.svg";
import js from "./img/js.svg";
import git from "./img/git.svg";
import bootstrap from "./img/bootstrap.svg";
import sass from "./img/sass.svg";
import redux from "./img/redux.svg";

import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  AOS.init();
  return (
    <div className="skills" id="skills">
      <h1>Technical Skills</h1>
      <div className="techskills">
        <img src={html} alt="html" data-aos={"fade-down"} />

        <img src={css} alt="css" data-aos={"fade-up"} />

        <img src={js} alt="js" data-aos={"fade-down"} />
        <img src={bootstrap} alt="bootstrap" data-aos={"fade-down"} />
        <img src={sass} alt="sass" data-aos={"fade-up"} />

        <img src={reeact} alt="react" data-aos={"fade-up"} />

        <img src={redux} alt="redux" data-aos={"fade-down"} />

        <img src={git} alt="git" data-aos={"fade-up"} />
      </div>
    </div>
  );
}

export default Skills;
