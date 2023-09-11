import React from "react";
import "./intro.css";
import bg from "./james2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> 'Hello, World!' </span>
        <span className="introText">
          {" "}
          I'm <span className="introName">James </span>{" "}
        </span>
        <p className="introPara">
          Currently a Flight Steward & an undergrad at SUSS <br />
          BSc Information and Communication Technology
        </p>
        <div className="linkIcon">
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/james-choo-jy/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xs" />
          </a>
          <a
            class="envelop"
            href="mailto:jameschoojy@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xs" />
          </a>
          <a
            class="whatsapp"
            href="https://wa.me/6582006048"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2xs" />
          </a>
          <a
            class="github"
            href="https://github.com/jameschoojy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xs" />
          </a>
        </div>
      </div>
      <img src={bg} alt="profile" className="pfp" />
    </section>
  );
};

export default Intro;
