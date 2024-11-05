import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [linkOffset, setLinkOffset] = useState(-20);

  const updateLinkOffset = () => {
    const width = window.innerWidth;
    setLinkOffset(width < 992 ? -150 : -20);
  };

  useEffect(() => {
    updateLinkOffset();
    window.addEventListener("resize", updateLinkOffset);
    return () => window.removeEventListener("resize", updateLinkOffset);
  }, []);

  const handleToggleNav = () => {
    setIsNavExpanded((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar sticky-top">
      <Container>
        <Navbar.Brand href="/">Duarte Jorge</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleNav}
        />
        <Navbar.Collapse id="responsive-navbar-nav" in={isNavExpanded}>
          <Nav className="ms-auto">
            <Link
              to="projects"
              smooth={true}
              duration={400}
              offset={linkOffset}
              className="nav-link"
              onClick={closeNav}
            >
              My Projects
            </Link>
            <Link
              to="mypath"
              smooth={true}
              duration={400}
              offset={linkOffset}
              className="nav-link"
              onClick={closeNav}
            >
              My Path
            </Link>
            <Link
              to="socials"
              smooth={true}
              duration={400}
              offset={linkOffset}
              className="nav-link"
              onClick={closeNav}
            >
              Socials
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
