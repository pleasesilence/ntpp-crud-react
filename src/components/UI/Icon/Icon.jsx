import React from 'react';
import styles from './Icon.module.css';
import {Link} from "react-router";
import NotesPage from "../../../pages/NotesPage/NotesPage";

const Icon = () => {
    return (
        <div>
            <Link to={'/notes'} className={styles.icon}>NTPP</Link>
        </div>
    );
};

export default Icon;