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
