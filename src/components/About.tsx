import { MdArrowOutward } from "react-icons/md";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI/ML enthusiast and web developer pursuing B.Tech in Artificial
          Intelligence at UCER, Prayagraj. I turn data into decisions and
          ideas into interactive experiences — from deep learning pipelines
          to responsive full-stack apps.
        </p>
        <a
          href="https://drive.google.com/file/d/1ZqTWBWnx79YaUeX3OODqcyK3rphHabQ9/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="about-resume"
        >
          View Full Resume <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default About;
