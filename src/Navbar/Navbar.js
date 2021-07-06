import {Navbar, Nav} from "../../node_modules/react-bootstrap";

function NavigationBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="fixed-top" bg="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav className="mr-auto text-center">
                    <Nav.Link href="#why">Why ?</Nav.Link>
                    <Nav.Link href="#work">How it work ?</Nav.Link>
                    <Nav.Link href="#use">How to use ?</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default NavigationBar;