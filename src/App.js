import React, {createContext, useContext, useEffect} from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import {setDefaultSettings} from "./helpers/settingsDataControl";

// export const ThemeContext = createContext(
//     JSON.parse(localStorage.getItem("settings")).theme
// );

function App() {

    useEffect(() => {
        setDefaultSettings()
    }, []);

    return (
        <div className="App">
            {/*<ThemeContext.Provider>*/}
                <AppRouter></AppRouter>
            {/*</ThemeContext.Provider>*/}
        </div>
    )
}

export default App;