import React from 'react';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBar__wrapper}>
                <div className={styles.sideBar__icon}>NTPP</div>
                <button className={styles.sideBar__create}>+</button>
            </div>
            <button className={styles.sideBar__settings}>Settings</button>
        </div>
    );
};

export default SideBar;