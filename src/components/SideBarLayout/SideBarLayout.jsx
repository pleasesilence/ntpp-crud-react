import React, {useContext} from 'react';
import styles from './SideBarLayout.module.css';
import {Link, Outlet } from 'react-router';
import NotesPage, {NoteContext} from "../../pages/NotesPage/NotesPage";

const SideBarLayout = () => {

    const [isActive, setActive] = React.useState(false);
    const colorsForNoteCreation = ['#FF9B72', '#FEC971', '#E3EF8F', '#0099B7', '#876DBC']
    const {createNote} = useContext(NoteContext)

    function showColors() {
        setActive(!isActive);
    }

    return (
        <>
            <header className={styles.sideBar}>
                <nav className={styles.sideBar__wrapper}>
                    <Link to={NotesPage} className={styles.sideBar__icon}>NTPP</Link>
                    <div className={styles.sideBar__creation}>
                        <button onClick={showColors} className={styles.sideBar__create}>+</button>
                        {isActive ? (
                            <div className={styles.sideBar__colors}>
                                {
                                    colorsForNoteCreation.map((color) => (
                                        <button onClick={() => createNote(color)} style={{backgroundColor: color}} className={styles.sideBar__color} key={color}></button>
                                    ))
                                }
                            </div>
                        ): <></>}
                    </div>
                </nav>
                <button className={styles.sideBar__settings}>Settings</button>
            </header>
            <Outlet/>
        </>
    );
};

export default SideBarLayout;