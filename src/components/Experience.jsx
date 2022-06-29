import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";

import "../styles/experience.css";
function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Work Experience</h1>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#edb554", color: "#333333" }}
          contentArrowStyle={{ borderRight: "7px solid  #edb554" }}
          date="06/2022-present"
          iconStyle={{ background: "#ae944f", color: "#333333" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Front-End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Jejelly</h4>
          <p>Just Started</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#edb554", color: "#333333" }}
          contentArrowStyle={{ borderRight: "7px solid  #edb554" }}
          date="04/2021 – 05/2021"
          iconStyle={{ background: "#ae944f", color: "#333333" }}
          icon={<FontAwesomeIcon icon={faBookReader} />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Development Instructor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            College Bootcamp
          </h4>
          <p>
            Taught my juniors front-end technologies (HTML5, CSS3, Bootstrap,
            and JavaScript) during a Bootcamp which takes place every year at my
            college.
          </p>
          <p>
            Built projects with them to show them how to use the technologies I
            taught them.
          </p>
          <p>
            {" "}
            Completed 200+ comprehensive student code reviews aimed at
            encouraging idiomatic coding style and scalable solutions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#edb554", color: "#333333" }}
          contentArrowStyle={{ borderRight: "7px solid  #edb554" }}
          date="09/2020 – Present"
          iconStyle={{ background: "#ae944f", color: "#333333" }}
          icon={<FontAwesomeIcon icon={faHouseLaptop} />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Front-End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Developed websites for small businesses and individuals to help
            their works to be online.
          </p>
          <p>
            {" "}
            This is a <a href="https://edemcreatives.netlify.app/">link</a> to
            the most recent site I developed and hosted for a graphic designer,
            this helped people find his works and order designs from him through
            the website. After launching the website, he went from getting less
            than 10 orders a week to getting 25+ orders a week.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#edb554", color: "#333333" }}
          contentArrowStyle={{ borderRight: "7px solid  #edb554" }}
          date="06/2020 – 12/2020"
          iconStyle={{ background: "#ae944f", color: "#333333" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Front-End Developer Intern{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Hypacart</h4>
          <p>
            Redesigned and Implemented a User Interface for the company’s
            website with the team, The new website’s performance was way better
            than the first one and we also recorded an increase in sales per
            week after launching.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
