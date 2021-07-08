import {Row, Col, Figure} from "../../../node_modules/react-bootstrap";
import './Home.css';

import ConfigurationPlugin from '../../images/configurationMoodle.png';
import AddActivity from '../../images/addActivity.png';
import SettingsActivity from '../../images/settingsActivity.png';
import ResultActivity from '../../images/resultActivity.png';
import OhifViewer from '../../images/ohifViewer.png';
import StoneViewer from '../../images/stoneViewer.png';


import {getLanguage} from '../../Lang.js';

function HomeUse(props) {

    var styleDefaultExample = {
        fontSize: "105%",
        fontStyle: "italic",
    }

    var styleImage = {
        width: "70%",
        height: "70%",
        borderRadius: "10px",
        border: "2px solid black"
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
                <Figure className="text-center">
                    <Figure.Caption className="text-center p-3">{getLanguage().Use.part1.legend}</Figure.Caption>
                    <Figure.Image src={ConfigurationPlugin} style={styleImage} alt="Image configuration plugin on moodle" fluid/>
                </Figure>
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
                    <Figure className="text-center p-3">
                        <Figure.Caption className="text-center">{getLanguage().Use.part3.legend[0]}</Figure.Caption>
                        <Figure.Image src={AddActivity} style={styleImage} alt="Image add plugin dicomviewer on courses on moodle" fluid/>
                    </Figure><br/>
                    {getLanguage().Use.part3.body[2]}<br/>
                    <Figure className="text-center p-3">
                        <Figure.Caption className="text-center">{getLanguage().Use.part3.legend[1]}</Figure.Caption>
                        <Figure.Image src={SettingsActivity} style={styleImage} alt="Image settings on dicomviewer activity on moodle" fluid/>
                    </Figure><br/>
                    {getLanguage().Use.part3.body[3]}<br/>
                    <Figure className="text-center p-3">
                        <Figure.Caption className="text-center">{getLanguage().Use.part3.legend[2]}</Figure.Caption>
                        <Figure.Image src={ResultActivity} style={styleImage} alt="Image result of the activity" fluid/>
                    </Figure>
                </p>
                <h3 className="pt-4">{getLanguage().Use.part4.title}</h3>
                <Figure className="text-center p-2">
                    <Figure.Caption className="text-center">{getLanguage().Use.part4.legend[0]}</Figure.Caption>
                    <Figure.Image src={OhifViewer} style={styleImage} alt="Image result of the activity" fluid/>
                </Figure>
                <Figure className="text-center p-2">
                    <Figure.Caption className="text-center">{getLanguage().Use.part4.legend[1]}</Figure.Caption>
                    <Figure.Image src={StoneViewer} style={styleImage} alt="Image result of the activity" fluid/>
                </Figure>
                <p>

                </p>
                <h3 className="pt-4">{getLanguage().Use.part5.title}</h3>
                <p>{getLanguage().Use.part5.body}</p>
            </Col>
        </Row>
    );
  }
  
  export default HomeUse;