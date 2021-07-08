import {Row, Container} from "../node_modules/react-bootstrap";
import Header from './components/Header.js';
import NavigationBar from './components/Navbar/Navbar.js';
import HomeAbout from './components/Home/HomeAbout.js';
import HomeWhy from './components/Home/HomeWhy.js';
import HomeUse from './components/Home/HomeUse.js';
import HomeWork from './components/Home/HomeWork.js';

import ArrowUp from './components/ArrowUp.js';
import { useState } from 'react';

import {setLanguage} from './Lang.js';

function App(props) {
  const [lang, setLang] = useState('EN');

  const Language = ['FR', 'EN'];

  var styleLang = {
    position: "fixed",
    top: "4rem",
    right: "2rem",
    height: "26px",
    width: "50px",
  }

  
  function changeLanguage(event){
    setLang(event.target.value);
    setLanguage(event.target.value)
  }

  return (
    <div>
        <NavigationBar />
        <Container fluid>
          <Row>
            <Container>
              <label className="text-dark" style={styleLang}>
                <form>
                <select value={lang} name="language" onChange={changeLanguage}>
                    <option value={Language[0]}>FR</option>
                    <option value={Language[1]}>EN</option>
                </select>

                </form>
                
              </label>
              <Header/>
              <HomeWhy />
              <HomeWork />
              <HomeUse />
              <HomeAbout />
              <ArrowUp />
            </Container>
          </Row>
        </Container>
    </div>
  );
}

export default App;
