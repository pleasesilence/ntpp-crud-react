import React, {createContext, useContext, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import {checkOrSetDefaultSettings, setDefaultSettings} from "./helpers/settingsDataControl";

export const LangContext = createContext(null)

function App() {

    checkOrSetDefaultSettings();

    const currentSettings = JSON.parse(localStorage.getItem('settings'));
    const [currentAppLanguage, setCurrentAppLanguage] = useState(currentSettings.language);

    return (
        <div className="App">
            <LangContext.Provider value={{setCurrentAppLanguage, currentAppLanguage}}>
                <AppRouter></AppRouter>
            </LangContext.Provider>
        </div>
    )
}

export default App;