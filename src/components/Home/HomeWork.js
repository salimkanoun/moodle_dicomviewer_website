import {Row, Col, Figure} from "../../../node_modules/react-bootstrap";
import Diagramme from "../../assets/images/diagramme.svg";
import '../../assets/css/Home.css';
import { useTranslation } from "react-i18next";

function HomeWork(props) {

    const { t } = useTranslation();

    var styleDiagramme = {
        borderRadius: "10px",
    }
    var styleLegend = {
        fontSize: "1.5rem",
    }
    return (
        <Row id="work" className="bg-dark text-light padding">
            <Col md="3" className="text-center">
                <h2>{t('Work.title')}</h2>
                <div className="StyleBorder">  </div>
                <i className="fas fa-network-wired mt-3 StyleIcon"></i>
            </Col>
            <Col md="9" className="align-items-center text-left">
                <div>
                    <p>
                        {t('Work.introduction.0')}<br/>
                        {t('Work.introduction.1')}
                    </p>
                    <p>{t('Work.body')}</p>
                    
                </div>
                <br/>
                <Figure>
                    <Figure.Image src={Diagramme} style={styleDiagramme} alt="Diagram reverse proxy" fluid/>

                    <Figure.Caption className="text-center" style={styleLegend}>{t('Work.legend')}</Figure.Caption>
                </Figure>
                
                
            </Col>
        </Row>
    );
  }
  
  export default HomeWork;