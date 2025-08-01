import React from 'react';
import styles from './Header.module.css'
import Icon from "../UI/Icon/Icon";
import {Link} from "react-router";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <Link className={styles.header__link} to='/notes'>Notes</Link>
                <Icon></Icon>
                <Link className={styles.header__link} to='/settings'>Settings</Link>
            </nav>
        </header>
    );
};

export default Header;