import {Navbar, Nav} from "../../../node_modules/react-bootstrap";

import { useTranslation } from "react-i18next";

function NavigationBar(props) {
    
    const { t } = useTranslation();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="fixed-top" bg="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav className="mr-auto text-center">
                    <Nav.Link href="#why">{t('Navbar.0')}</Nav.Link>
                    <Nav.Link href="#work">{t('Navbar.1')}</Nav.Link>
                    <Nav.Link href="#use">{t('Navbar.2')}</Nav.Link>
                    <Nav.Link href="#about">{t('Navbar.3')}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default NavigationBar;