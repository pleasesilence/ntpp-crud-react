import React from 'react';
import styles from './AppearanceOptions.module.css'
import Option from '../Option/Option'

const AppearanceOptions = () => {
    return (
        <div className={styles.appearance__wrapper}>
            <Option
                name='Toggle Theme'
                description='Switching the color scheme from light to dark'
            ></Option>
            <Option
                name='Сhange the sidebar position'
                description='Changes the position of the sidebar from vertical to horizontal'
            ></Option>
            <Option
                name='Change the language'
                description='Switching the color scheme from light to dark'
            ></Option>
            <Option
                name='Make all notes the same size'
                description='All large notes will become standard size'
            ></Option>
        </div>
    );
};

export default AppearanceOptions;