import React, { ChangeEvent} from "react";
import { Language } from './enums/Language';

import './assets/css/Lang.css';


const Lang = (props : any) => {
    
    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
 
        switch (language) {
            case Language.EN:
                
                props.onLanguageChange(Language.EN);
                break;
            case Language.FR:
            default:
                
                props.onLanguageChange(Language.FR);
                break;
        }
    }
 
    return (
        <div>
            <div className="StyleLang">
                <select value={props.language} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </select>
            </div>
        </div>
    )
}
 
export default Lang;