import FR from './Lang/fr.json';
import EN from './Lang/en.json';

var language = EN;
export function getLanguage(){
    return language;
}

export function setLanguage(newLanguage){
    switch (newLanguage){
        case 'FR':
            language = FR;
            break;
        default:
            language = EN;
      }
}

