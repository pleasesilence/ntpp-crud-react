import React, {createContext} from 'react';
import styles from './NotesPage.module.css'
import NoteContainer from "../../components/NoteContainer/NoteContainer";
import SearchField from "../../components/SearchField/SearchField";
import SideBarLayout from "../../components/SideBarLayout/SideBarLayout";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import NoteEditor from "../../components/NoteEditor/NoteEditor";
import {createNote, updateNote} from "../../helpers/noteDataControl";

export const NoteContext = createContext(null);

const NotesPage = () => {
    const [notes, setNotes] =
        React.useState(JSON.parse(localStorage.getItem("notes"))
        ? JSON.parse(localStorage.getItem("notes"))
        : []
    );

    const [isModalActive, setIsModalActive] = React.useState(false);
    const [currentData, setCurrentData] = React.useState(null);

    function createNoteAndUpdateState(color) {
        const newNote = createNote(color)
        setNotes([...notes, newNote]);
    }

    function buildModal(data) {
        setIsModalActive(true);
        setCurrentData(data);
    }

    function disableModal() {
        setIsModalActive(false);
    }

    return (
        <NoteContext.Provider value={{createNoteAndUpdateState, notes}}>
            <main className={styles.noteWrapper}>
                <SideBarLayout></SideBarLayout>
                <section className={styles.note}>
                    <SearchField></SearchField>
                    <NoteContainer toggleModal={buildModal}></NoteContainer>
                </section>
            </main>
            {
                isModalActive ? (
                    <ModalWindow visible={isModalActive} disableVisible={disableModal}>
                        <NoteEditor updateState={setNotes} currentNotes={notes} visible={isModalActive} noteData={currentData}></NoteEditor>
                    </ModalWindow>
                ) : <></>
            }
        </NoteContext.Provider>

    );
};

export default NotesPage;