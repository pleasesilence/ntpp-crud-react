import React from 'react';
import styles from './StatisticsOptions.module.css';

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

    return (
        <div className={styles.stats__wrapper}>
            <div className={styles.stats__label}>
                <p className={styles.stats__name}>Full number of notes</p>
                <p className={styles.stats__value}>{statData.numberOfNotes}</p>
            </div>
            <div className={styles.stats__label}>
                <p className={styles.stats__name}>Number of favorite notes</p>
                <p className={styles.stats__value}>{statData.numberOfFavorites}</p>
            </div>
            <div className={styles.stats__label}>
                <p className={styles.stats__name}>Number of large notes</p>
                <p className={styles.stats__value}>{statData.numberOfLarge}</p>
            </div>
        </div>
    );
};

export default StatisticsOptions;