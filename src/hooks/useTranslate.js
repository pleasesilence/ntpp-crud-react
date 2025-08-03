import {useContext, useEffect, useState} from "react";
import en from '../translations/en.json'
import ru from '../translations/ru.json'
import {LangContext} from "../App";

const translations = {en, ru}

export function useTranslate() {
    const {currentAppLanguage, setCurrentAppLanguage} = useContext(LangContext)

    function getTranslation(key) {
        let result;
        if (typeof key === 'string' && key.includes('.')) {
            const keys = key.split('.')
            result = translations[currentAppLanguage]
            keys.forEach((key, index) => {
                if (result[key]) {
                    result = result[key]
                }
        })} else {
            return `This type of key - "${typeof key}" isn't supported.`
        }
        return result
    }

    const [translate, setTranslate] = useState(() => getTranslation)

    useEffect(() => {
        setTranslate(() => getTranslation)
    }, [currentAppLanguage])

    return {currentAppLanguage, setCurrentAppLanguage, translate}
}