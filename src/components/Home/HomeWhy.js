import {Row, Col} from "../../../node_modules/react-bootstrap";
import '../../assets/css/Home.css';

import { useTranslation } from "react-i18next";

function HomeWhy(props) {

    const { t } = useTranslation();

    var styleSpan = {
        fontSize: "120%",
        marginTop: "1rem",
        fontStyle: "italic",

    }
    return (
        <Row id="why" className="padding bg-light text-dark">
            <Col md="3" className="text-center">
                <h2> {t('Why.title')}</h2>
                <div className="StyleBorder">  </div>
                <i className="far fa-question-circle mt-3 StyleIcon"></i>
            </Col>
            <Col md="9" className="align-items-center text-left">
                <p >
                    <div>
                        {t('Why.introduction')}

                        <br/>
                        {t('Why.viewerTitle')}
                        <ul>
                            <li>Open Healt Imaging Foundation  (OHIF)</li>
                            <li>Stone web viewer</li>
                        </ul>
                    
                        {t('Why.conclusion.0')}<br/>
                        {t('Why.conclusion.1')}
                    
                    </div>
                    <div style={styleSpan}>
                        {t('Why.quote')}
                    </div>
                </p>
            </Col>
        </Row>
    );
  }
  
  export default HomeWhy;