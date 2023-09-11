import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="portfolio" href="#">
        Portfo<span>lio</span>
      </div>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
        >
          Contact
        </Link>
      </div>
      <a class="cvlink" href="./" download>
        Download CV
      </a>
    </nav>
  );
};

export default Navbar;
