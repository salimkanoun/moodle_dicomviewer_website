import {Row, Col} from "../../../node_modules/react-bootstrap";
import '../../assets/css/Home.css';
import { useTranslation } from "react-i18next";

function About(props) {

    const { t } = useTranslation();
    return (
        <Row id="about" className="bg-dark text-light padding">
            <Col md="3" className="text-center">
                <h2>{t('About.title')}</h2>
                <div className="StyleBorder">  </div>
                <i className="fas fa-user-cog mt-3 StyleIcon"></i>
            </Col>
            <Col md="9" className="align-items-center">
                <p>
                    {t('About.body')}<br/>
                    {t('About.person1')}<br/>
                    {t('About.person2')}
                </p>
                <p>{t('About.year')} 2021</p>
            </Col>
        </Row>
    );
  }
  
  export default About;