import {Navbar, Nav} from "../../../node_modules/react-bootstrap";

import { useTranslation } from "react-i18next";


function NavigationBar(props) {
   
    function changeStyleItem(id, arrayItem) {
        var itemNavbar = document.getElementById(id);
        itemNavbar.style.color = "#5CE0D8";
    
        arrayItem.forEach(function(item){
            var itemNavbar = document.getElementById(item);
            itemNavbar.style.color = "#9B9D9E";
        });
    }
    function resetStyleItem(arrayItem){
        arrayItem.forEach(function(item){
            var itemNavbar = document.getElementById(item);
            itemNavbar.style.color = "#9B9D9E";
        });
    }

    window.addEventListener('scroll', (event) => {
        var elementUn = document.getElementById("header").offsetHeight;
        var elementDeux = document.getElementById("why").offsetHeight + elementUn + 200%window.innerHeight;
        var elementTrois = document.getElementById("work").offsetHeight + elementDeux;
        var elementQuatre = document.getElementById("use").offsetHeight + elementTrois - 200%window.innerHeight;
        if(window.pageYOffset < document.getElementById("header").offsetHeight/2){
            resetStyleItem([1,2,3,4]);
        }
        if(window.pageYOffset > elementUn){
            changeStyleItem(1, [2,3,4]);
        }
        if(window.pageYOffset > elementDeux){
            changeStyleItem(2, [1,3,4]);
        }
        if(window.pageYOffset > elementTrois){
            changeStyleItem(3, [2,1,4]);
        }
        if(window.pageYOffset > elementQuatre){
            changeStyleItem(4, [2,3,1]);
        }

    });

    const { t } = useTranslation();

    return (
        <Navbar expand="lg" variant="dark" className="fixed-top" bg="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav className="mr-auto text-center d-flex align-items-center">
                    <Nav.Item>
                        <Nav.Link id="1" onClick={() => changeStyleItem(1, [2,3,4])} href="#why">{t('Navbar.0')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id="2" onClick={() => changeStyleItem(2, [1,3,4])} href="#work">{t('Navbar.1')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id="3" onClick={() => changeStyleItem(3, [1,2,4])} href="#use">{t('Navbar.2')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id="4" onClick={() => changeStyleItem(4, [1,2,3])} href="#about">{t('Navbar.3')}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default NavigationBar;

