import{useState, useEffect} from "react"; //class holds which link we are on
import {Navbar, Nav, Container} from "react-bootstrap"
import logo from '../assets/img/logo.svg';
import logo2 from '../assets/img/bmlogo4.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home'); //activeLink state

    const[scrolled, seScrolled] = useState(false); //when the pages load they are transparent but when we start scrolling it changes
                                                    // this keeps track of whether the user has scrolled or not
    useEffect(() => {    //this useEffect is triggered once scroll happenns
        const onScroll = () =>{
            if(window.scrollY > 50){ //height of how much has been scrolled, 50 is similar size of the banner we will have
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll); //since this is a function we have eventlistener that fires when scroll happens

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>  
          <Container>
            <Navbar.Brand href="#home">
                <img src = {logo2} alt = "Logo" />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className = "navbar-toggler-icon"> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link> 
              </Nav>
              <span className = "navbar-text">
                <div className = "social-icon">
                <a href = '#'><img src = {navIcon1} alt = ""/></a>
                </div>
                <button className = "vvd" onClick = {() =>  window.location.replace("/#contactForm") }><span>Contact Us</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}