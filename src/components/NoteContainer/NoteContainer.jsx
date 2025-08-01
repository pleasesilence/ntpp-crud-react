import React, {createContext, useContext, useState} from 'react';
import styles from './NoteContainer.module.css';
import NoteCard from "../NoteCard/NoteCard";
import {NoteContext} from "../../pages/NotesPage/NotesPage";

export const SelectContext = createContext(null);

const NoteContainer = ({children, toggleModal}) => {

    const {notes} = useContext(NoteContext);
    const [isSelected, setIsSelected] = useState('');

    function selectNote(id) {
        setIsSelected(id);
    }

    return (
        <SelectContext.Provider value={isSelected}>
            <div className={styles.noteContainer}>
                <h1 className={styles.noteContainer__title}>Notes</h1>
                <div className={styles.noteContainer__content}>
                    {notes.length > 0 ?
                        notes.map((note) => (
                            <NoteCard toggleModal={toggleModal} key={note.id} noteData={note} selectNote={selectNote}/>
                        )): <p>There are no notes here.</p>}
                </div>
            </div>
        </SelectContext.Provider>
    );
};

export default NoteContainer;