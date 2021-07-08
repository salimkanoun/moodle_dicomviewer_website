import {Row, Col} from "../../../node_modules/react-bootstrap";
import './Home.css';

import {getLanguage} from '../../Lang.js';

function HomeWhy(props) {

    var styleSpan = {
        fontSize: "120%",
        marginTop: "1rem",
        fontStyle: "italic",

    }
    return (
        <Row id="why" className="padding bg-light text-dark">
            <Col md="3" className="text-center">
                <h2> {getLanguage().Why.title}</h2>
                <div className="StyleBorder">  </div>
                <i className="far fa-question-circle mt-3 StyleIcon"></i>
            </Col>
            <Col md="9" className="align-items-center text-left">
                <p >
                    <div>
                        {getLanguage().Why.introduction}

                        <br/>
                        {getLanguage().Why.viewerTitle}
                        <ul>
                            <li>Open Healt Imaging Foundation  (OHIF)</li>
                            <li>Stone web viewer</li>
                        </ul>
                    
                        {getLanguage().Why.conclusion[0]}<br/>
                        {getLanguage().Why.conclusion[1]}
                    
                    </div>
                    <div style={styleSpan}>
                        {getLanguage().Why.quote}
                    </div>
                </p>
            </Col>
        </Row>
    );
  }
  
  export default HomeWhy;