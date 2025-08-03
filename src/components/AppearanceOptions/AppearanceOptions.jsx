import React, {useContext, useState} from 'react';
import styles from './AppearanceOptions.module.css'
import Option from '../Option/Option'
import {useTranslate} from "../../hooks/useTranslate";
import {LangContext} from "../../App";
import {updateSettingsOption} from "../../helpers/settingsDataControl";

const AppearanceOptions = () => {

    const {currentAppLanguage, setCurrentAppLanguage} = useContext(LangContext)
    const {translate} = useTranslate();

    function toggleAppLanguage() {
        setCurrentAppLanguage(currentAppLanguage === 'en' ? 'ru' : 'en')
    }

    updateSettingsOption('language', currentAppLanguage)

    function checkIsOptionOn(id) {
        try {
            const optionsState = JSON.parse(localStorage.getItem('optionsState'));
            if (!optionsState) {
                throw new Error('No options state found');
            }
            const isChecked = optionsState[id]
            return isChecked;
        } catch (e) {
            // const idArr =
            let defaultOptionsState = null
            localStorage.setItem('optionsState', JSON.stringify(defaultOptionsState));
            console.log(e)
            return false
        }
    }

    return (
        <div className={styles.appearance__wrapper}>
            <Option
                id = 'theme'
                name={translate('settings.appearance.toggleTheme')}
                description={translate('settings.appearance.toggleThemeDesc')}
            ></Option>
            <hr/>
            <Option
                id = 'sidebarPos'
                name={translate('settings.appearance.sidebarPos')}
                description={translate('settings.appearance.sidebarPosDesc')}
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