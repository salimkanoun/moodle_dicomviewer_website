import {Row, Container} from "../node_modules/react-bootstrap";
import Header from './components/Header.js';
import NavigationBar from './components/Navbar/Navbar.js';
import HomeAbout from './components/Home/HomeAbout.js';
import HomeWhy from './components/Home/HomeWhy.js';
import HomeUse from './components/Home/HomeUse.js';
import HomeWork from './components/Home/HomeWork.js';

import ArrowUp from './components/ArrowUp.js';
import { useState } from 'react';

import Lang from "./Lang.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from "./enums/Language";
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';


let defaultLanguage = Language.FR;
 
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
 
    keySeparator: ".",  // to support nested translations
 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
 



function App(props) {
  const [lang, setLang] = useState('EN');

  
  function changeLanguage(language){
    setLang(language);
    i18n.changeLanguage(language)
  }


  return (
    <div>
        <Container fluid>
          <NavigationBar />
          <Row>
            <Container>
              <Header/>
              <Lang onLanguageChange = {changeLanguage} language = {lang} />
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
