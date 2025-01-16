import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/img/bmlogo4.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';

export const NavBar = () => {
    const [scrolled, seScrolled] = useState(false); // Tracks whether the page has been scrolled

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) { // Trigger scroll effect after 50px
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll); // Add scroll listener
        return () => window.removeEventListener("scroll", onScroll); // Cleanup listener
    }, []);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/#home">
                    <div className="logo" onClick={() => window.location.href = '/#home'}>
                        <img src={logo} alt="Logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Add link to Privacy Policy */}
                        <Nav.Link as={Link} to="/privacy-policy" className="navbar-link">
                            Privacy Policy
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
            <div className="social-icon">
              <a href="/#"><img src={navIcon1} alt="LinkedIn Icon" /></a>
            </div>
            <button className="vvd" onClick={() => window.location.replace("/#contactForm")}>
              <span>Contact Us</span>
            </button>
          </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
