import React from 'react';
import styles from './StatisticsOptions.module.css';
import {useTranslate} from "../../hooks/useTranslate";

const StatisticsOptions = () => {

    const notesData = JSON.parse(localStorage.getItem('notes'))

    function countNumberOf(option, needValue) {
        let count = 0;
        notesData.forEach((note) => {
            if (note.options[option].value === needValue) {
                count++;
            }
        })
        return count;
    }

    const statData = {
        numberOfNotes: notesData.length,
        numberOfFavorites: countNumberOf('favorite', true),
        numberOfLarge: countNumberOf('size', 'Large')
    }

    const {translate} = useTranslate();
    return (
        <div className={styles.stats__wrapper}>
            <div className={styles.stats__label}>
                <p className={styles.stats__name}>{translate('settings.statistics.fullNumber')}</p>
                <p className={styles.stats__value}>{statData.numberOfNotes}</p>
            </div>
            <hr/>
            <div className={styles.stats__label}>
                <p className={styles.stats__name}>{translate('settings.statistics.favoriteNotes')}</p>
                <p className={styles.stats__value}>{statData.numberOfFavorites}</p>
            </div>
            <hr/>
            <div className={styles.stats__label}>
                <p className={styles.stats__name}>{translate('settings.statistics.largeNotes')}</p>
                <p className={styles.stats__value}>{statData.numberOfLarge}</p>
            </div>
        </div>
    );
};

export default StatisticsOptions;