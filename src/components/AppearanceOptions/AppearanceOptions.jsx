import React, {useContext, useEffect} from 'react';
import styles from './AppearanceOptions.module.css'
import Option from '../Option/Option'
import {useTranslate} from "../../hooks/useTranslate";
import {LangContext, ThemeContext} from "../../App";
import {updateSettingsOption} from "../../helpers/settingsDataControl";

const AppearanceOptions = () => {

    const {currentAppLanguage, setCurrentAppLanguage} = useContext(LangContext)
    const {currentAppTheme, setCurrentAppTheme} = useContext(ThemeContext)
    const {translate} = useTranslate();

    function toggleAppLanguage() {
        setCurrentAppLanguage(currentAppLanguage === 'en' ? 'ru' : 'en')
    }
    useEffect(() => {
        updateSettingsOption('language', currentAppLanguage)
    }, [currentAppLanguage])


    function toggleAppTheme() {
        setCurrentAppTheme(currentAppTheme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        updateSettingsOption('theme', currentAppTheme)
    }, [currentAppTheme])


    function checkIsOptionOn(id) {
        try {
            const optionsState = JSON.parse(localStorage.getItem('optionsState'));
            if (!optionsState) {
                throw new Error('No options state found');
            }
            return optionsState[id];
        } catch (e) {
            const defaultOptionsState = {
                theme: false,
                toggleLang: false
            }
            localStorage.setItem('optionsState', JSON.stringify(defaultOptionsState));
            console.log(e)
            return false
        }
    }

    return (
        <div className={styles.appearance__wrapper}>
            <Option
                id = 'theme'
                isChecked={checkIsOptionOn}
                action={toggleAppTheme}
                name={translate('settings.appearance.toggleTheme')}
                description={translate('settings.appearance.toggleThemeDesc')}
            ></Option>
            <hr/>
            <Option
                id = 'toggleLang'
                isChecked={checkIsOptionOn}
                action={toggleAppLanguage}
                name={translate('settings.appearance.toggleLang')}
                description={translate('settings.appearance.toggleLangDesc')}
            ></Option>
        </div>
    );
};

export default AppearanceOptions;