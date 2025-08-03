import React, {createContext, useContext, useState} from 'react';
import styles from './NoteContainer.module.css';
import NoteCard from "../NoteCard/NoteCard";
import {NoteContext} from "../../pages/NotesPage/NotesPage";
import {useTranslate} from "../../hooks/useTranslate";

export const SelectContext = createContext(null);

const NoteContainer = ({notes, toggleModal}) => {

    const [isSelected, setIsSelected] = useState('');

    function selectNote(id) {
        setIsSelected(id);
    }

    const {translate} = useTranslate();

    return (
        <SelectContext.Provider value={isSelected}>
            <div className={styles.noteContainer}>
                <h1 className={styles.noteContainer__title}>{translate('notes.notes')}</h1>
                <div className={styles.noteContainer__content}>
                    {notes.length > 0 ?
                        notes.map((note) => (
                            <NoteCard toggleModal={toggleModal} key={note.id} noteData={note} selectNote={selectNote}/>
                        )): <div className={styles.noteContainer__none}>{translate('notes.zeroNotes')}</div>}
                </div>
            </div>
        </SelectContext.Provider>
    );
};

export default NoteContainer;