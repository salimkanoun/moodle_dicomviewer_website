import {Row, Container} from "../node_modules/react-bootstrap";

import Header from './Header.js';
import NavigationBar from './Navbar/Navbar.js';
import HomeWhy from './Home/HomeWhy.js';
import HomeWork from './Home/HomeWork.js';
import HomeUse from './Home/HomeUse.js';
import HomeAbout from './Home/HomeAbout.js';
import ArrowUp from './Home/ArrowUp.js';

function App(props) {
  return (
    <div>
        <NavigationBar />
        <Container fluid>
          <Row className="text-center">
            <Container>
              <Header/>
            </Container>
          </Row>
          <HomeWhy />
          <HomeWork />
          <HomeUse />
          <HomeAbout />
          <ArrowUp />
        </Container>
    </div>
  );
}

export default App;
