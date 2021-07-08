import {Row, Col} from "../../../node_modules/react-bootstrap";
import './Home.css';

import {getLanguage} from '../../Lang.js';

function HomeUse(props) {

    var styleDefaultExample = {
        fontSize: "105%",
        fontStyle: "italic",
    }
    return (
        <Row id="use" className="bg-light text-dark padding">
            <Col md="3" className="text-center ">
                <h2>{getLanguage().Use.title}</h2>
                <div className="StyleBorder">  </div>
                <i className="fas fa-laptop-code mt-3 StyleIcon"></i>
            </Col>
            <Col md="9" className="align-items-center text-left">
                <h3>{getLanguage().Use.part1.title}</h3>
                <p>
                    {getLanguage().Use.part1.body[0]}<a href="#use">https://moodle.org/plugins/#####</a>{getLanguage().Use.part1.body[1]}<br/>
                    {getLanguage().Use.part1.body[2]}
                </p>
                <h3 className="pt-4">{getLanguage().Use.part2.title}</h3>
                <p>{getLanguage().Use.part1.body}</p>
                <ul>
                    <h6 className="pt-2"><strong>Stone Web Viewer</strong></h6>
                    <li>{getLanguage().Use.part2.list.element[0]}<span style={styleDefaultExample}>{getLanguage().Use.part2.list.default[0]}</span></li>
                    <li>{getLanguage().Use.part2.list.element[1]}<span style={styleDefaultExample}>{getLanguage().Use.part2.list.default[1]}</span></li>
                    <h6 className="pt-2"><strong>OHIF Viewer</strong></h6>
                    <li>{getLanguage().Use.part2.list.element[2]}<span style={styleDefaultExample}>{getLanguage().Use.part2.list.default[2]}</span></li>
                    <li>{getLanguage().Use.part2.list.element[3]}<span style={styleDefaultExample}>{getLanguage().Use.part2.list.default[3]}</span></li>
                    <li>{getLanguage().Use.part2.list.element[4]}<span style={styleDefaultExample}>{getLanguage().Use.part2.list.default[4]}</span></li>
                </ul>
                <h3 className="pt-4">{getLanguage().Use.part3.title}</h3>
                <p>
                    {getLanguage().Use.part3.body[0]}<br/>
                    {getLanguage().Use.part3.body[1]}<br/>
                    {getLanguage().Use.part3.body[2]}<br/>
                    {getLanguage().Use.part3.body[3]}
                </p>
                <h3 className="pt-4">{getLanguage().Use.part4.title}</h3>
                <p>{getLanguage().Use.part4.body}</p>
            </Col>
        </Row>
    );
  }
  
  export default HomeUse;