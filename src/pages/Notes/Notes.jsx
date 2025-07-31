import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import styles from './Notes.module.css'
import NoteContainer from "../../components/NoteContainer/NoteContainer";
import SearchField from "../../components/SearchField/SearchField";

const Notes = () => {
    return (
        <div className={styles.note}>
            <SearchField></SearchField>
            <NoteContainer></NoteContainer>
        </div>
    );
};

export default Notes;