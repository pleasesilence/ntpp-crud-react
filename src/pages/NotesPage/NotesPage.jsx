import React, {useMemo, useState} from 'react';
import styles from './NotesPage.module.css'
import NoteContainer from "../../components/NoteContainer/NoteContainer";
import SearchField from "../../components/SearchField/SearchField";
import SideBarLayout from "../../components/SideBarLayout/SideBarLayout";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import NoteEditor from "../../components/NoteEditor/NoteEditor";
import {createNote} from "../../helpers/noteDataControl";

const NotesPage = () => {
    const [notes, setNotes] =
        React.useState(JSON.parse(localStorage.getItem("notes"))
        ? JSON.parse(localStorage.getItem("notes"))
        : []
    );
    const [isModalActive, setIsModalActive] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const sortedNotes = useMemo(() => {
        return [...notes].sort((a, b) => a.id - b.id);
    }, [notes])

    const sortedAndSearchedNotes = useMemo(() => {
        return sortedNotes.filter(note => note.name.includes(searchQuery))
    }, [sortedNotes, searchQuery]);

    function handleSearchChange(newState) {
        setSearchQuery(newState)
    }

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
        <div>
            <main className={styles.noteWrapper}>
                <SideBarLayout isCreateActive={true} createNoteAndUpdateState={createNoteAndUpdateState}></SideBarLayout>
                <section className={styles.note}>
                    <SearchField handleSearchChange={handleSearchChange}></SearchField>
                    <NoteContainer notes={sortedAndSearchedNotes} toggleModal={buildModal}></NoteContainer>
                </section>
            </main>
            {
                isModalActive ? (
                    <ModalWindow visible={isModalActive} disableVisible={disableModal}>
                        <NoteEditor updateState={setNotes} currentNotes={notes} noteData={currentData} disableVisible={disableModal}></NoteEditor>
                    </ModalWindow>
                ) : <></>
            }
        </div>
    );
};

export default NotesPage;