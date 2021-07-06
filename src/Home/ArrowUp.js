import React from 'react';
import {Row} from "../../node_modules/react-bootstrap";
import Icon from "../images/icon_up.png";
import IconInv from "../images/icon_up_inverse.png";



function ArrowUp() {
    
    var mouseEnter = () => {
       
        var elementArrow = document.getElementById('arrow');
        elementArrow.style.backgroundImage = `url(${IconInv})`;
        
    }
   
    var mouseLeave = () => {
        
        var elementArrow = document.getElementById('arrow');
        elementArrow.style.backgroundImage = `url(${Icon})`;
        
           
    }

    window.addEventListener('scroll', (event) => {
        if(window.pageYOffset > window.innerHeight){
            document.getElementById('arrow').style.visibility = "visible";
        }else{
            document.getElementById('arrow').style.visibility = "hidden";
        }

    });

    var styleArrow = {
        position: "fixed",
        top: "90%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundImage: `url(${Icon})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        height: "50px",
        width: "50px",
        cursor: "pointer",
        visibility: "hidden",
        
    }

    return (
        <Row>
            <a href="#root" id="arrow" className="arrow" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleArrow}>

            </a>
        </Row>
    )
}


export default ArrowUp;