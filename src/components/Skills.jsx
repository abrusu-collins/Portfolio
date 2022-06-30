import "../styles/skills.css";
import reeact from "./img/react.png";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import git from "./img/git.png";
import bootstrap from "./img/bootstrap.png";
import sass from "./img/sass.png";
import redux from "./img/redux.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  AOS.init();
  return (
    <div className="skills" id="skills">
      <h1>Technical Skills</h1>
      <div className="techskills">
        <img src={html} alt="" data-aos={"fade-down"} />

        <img src={css} alt="" data-aos={"fade-up"} />

        <img src={js} alt="" data-aos={"fade-down"} />

        <img src={sass} alt="" data-aos={"fade-up"} />

        <img src={bootstrap} alt="" data-aos={"fade-down"} />

        <img src={reeact} alt="react" data-aos={"fade-up"} />

        <img src={redux} alt="" data-aos={"fade-down"} />

        <img src={git} alt="" data-aos={"fade-up"} />
      </div>
    </div>
  );
}

export default Skills;
