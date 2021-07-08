import {Navbar, Nav} from "../../../node_modules/react-bootstrap";

import {getLanguage} from '../../Lang.js';

function NavigationBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="fixed-top" bg="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav className="mr-auto text-center">
                    <Nav.Link href="#why">{getLanguage().Navbar[0]}</Nav.Link>
                    <Nav.Link href="#work">{getLanguage().Navbar[1]}</Nav.Link>
                    <Nav.Link href="#use">{getLanguage().Navbar[2]}</Nav.Link>
                    <Nav.Link href="#about">{getLanguage().Navbar[3]}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default NavigationBar;