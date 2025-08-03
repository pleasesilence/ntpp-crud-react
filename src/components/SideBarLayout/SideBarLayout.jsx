import React, {useState} from 'react';
import styles from './SideBarLayout.module.css';
import {Link, Outlet } from 'react-router';
import Icon from "../UI/Icon/Icon";

import {useTranslate} from '../../hooks/useTranslate'

const SideBarLayout = ({isCreateActive, createNoteAndUpdateState}) => {

    const [isActive, setActive] = useState(false);
    const colorsForNoteCreation = ['#FF9B72', '#FEC971', '#E3EF8F', '#0099B7', '#876DBC']

    function showColors() {
        setActive(!isActive);
    }

    const {translate} = useTranslate();

    return (
        <>
            <header className={styles.sideBar}>
                <nav className={styles.sideBar__wrapper}>
                    <Icon></Icon>
                    <div className={styles.sideBar__creation}>
                        { isCreateActive ? (
                            <button onClick={showColors} className={styles.sideBar__create}>+</button>
                        ): <></>}
                        {isActive ? (
                            <div className={styles.sideBar__colors}>
                                {
                                    colorsForNoteCreation.map((color) => (
                                        <button onClick={() => createNoteAndUpdateState(color)} style={{backgroundColor: color}} className={styles.sideBar__color} key={color}></button>
                                    ))
                                }
                            </div>
                        ): <></>}
                    </div>
                </nav>
                <Link to='/settings/appearance' className={styles.sideBar__settings}>{translate('notes.settings')}</Link>
            </header>
            <Outlet/>
        </>
    );
};

export default SideBarLayout;