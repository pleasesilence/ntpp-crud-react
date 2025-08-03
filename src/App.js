import React, {createContext, useEffect, useMemo, useState} from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import {checkOrSetDefaultSettings} from "./helpers/settingsDataControl";

export const LangContext = createContext(null)
export const ThemeContext = createContext(null);

function App() {

    checkOrSetDefaultSettings();

    const currentSettings = JSON.parse(localStorage.getItem('settings'));
    const [currentAppLanguage, setCurrentAppLanguage] = useState(currentSettings.language);
    const [currentAppTheme, setCurrentAppTheme] = useState(currentSettings.theme);

    let rootClasses = ['App']
    rootClasses = useMemo(() => {
        if (currentAppTheme === 'dark') {
            return ['App', 'App_dark']
        }
        return rootClasses;
    }, [currentAppTheme])

    return (
        <div className={rootClasses.join(' ')}>
            <ThemeContext.Provider value={{setCurrentAppTheme, currentAppTheme}}>
                <LangContext.Provider value={{setCurrentAppLanguage, currentAppLanguage}}>
                    <AppRouter></AppRouter>
                </LangContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export default App;