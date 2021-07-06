import {Row, Col} from "../node_modules/react-bootstrap";
import useWindowDimensions from "./event/getDimension.js";
import Background from './images/background.jpg';

function getStyleRow(h, w) {
    return{
        backgroundImage: `url(${Background})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        height: h + 'px',
        width: w + 'px',
    }

}

function Header(props) {

    var mouseEnter = () => {
       
        var elementH2 = document.getElementById('targetHeader');
        elementH2.style.fontSize = "2.5rem";
        
    }
   

    var mouseLeave = () => {
        
        var elementH2 = document.getElementById('targetHeader');
        elementH2.style.fontSize = "2rem";
        
        
    }

    let style = {
        marginLeft: "35%",
        marginRight: "35%",
        background: "rgba(63, 61, 86, 0.55)", 
        padding: "2rem 3rem",
    }
    let styleH2 = {
        padding: "1rem 2rem",
        fontSize: "2rem",
        fontWeight: "bold",
        transition: "1s",

    }
    let styleP = {
        fontSize: "1rem",

    }

    return (
        <Row className="bg-dark text-light align-items-center text-center" style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)}>
            <Col>
            <div style={style}>
                <h2 id="targetHeader" style={styleH2} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Dicom Viewer</h2>
                <p style={styleP}>A plugin for the Learning Management System Moodle!</p>
            </div>
            </Col>
        </Row>
    );
  }
  
  export default Header;