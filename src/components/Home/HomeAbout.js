import {Row, Col} from "../../../node_modules/react-bootstrap";
import './Home.css';

import {getLanguage} from '../../Lang.js';

function About(props) {
    return (
        <Row id="about" className="bg-dark text-light padding">
            <Col md="3" className="text-center">
                <h2>{getLanguage().About.title}</h2>
                <div className="StyleBorder">  </div>
                <i className="fas fa-user-cog mt-3 StyleIcon"></i>
            </Col>
            <Col md="9" className="align-items-center">
                <p>
                    {getLanguage().About.body}<br/>
                    {getLanguage().About.person1}<br/>
                    {getLanguage().About.person2}
                </p>
                <p>{getLanguage().About.year} 2021</p>
            </Col>
        </Row>
    );
  }
  
  export default About;