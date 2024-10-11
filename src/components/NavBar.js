import { useState, useEffect } from "react"; //class holds which link we are on
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/bmlogo4.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false); // Tracks whether the user has scrolled past a certain point
    const [showNav, setShowNav] = useState(true); // Tracks whether to show the navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setShowNav(false); // Hide the navbar
            } else {
                // Scrolling up
                setShowNav(true); // Show the navbar
            }

            // Only mark as scrolled if the user scrolls past 50px
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Save current scroll position
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY]);

    return (
        <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${showNav ? "show-nav" : "hide-nav"}`}>
            <Container>
                <Navbar.Brand href="/#home">
                    <div className="logo" onClick={() => window.location.href='/#home'}>
                        <img src={logo} alt="Logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="/#"><img src={navIcon1} alt="linkdnIcon" /></a>
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
