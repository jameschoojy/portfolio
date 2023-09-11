import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <p class="copy">
        Built with &nbsp;
        <FontAwesomeIcon icon={faReact} size="2xl" />
        &nbsp; By:
        <a
          href="https://www.linkedin.com/in/james-choo-jy/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;James
        </a>
      </p>
    </footer>
  );
};

export default Footer;
