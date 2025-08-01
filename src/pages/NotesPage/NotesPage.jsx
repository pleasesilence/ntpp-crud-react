import React, {createContext} from 'react';
import styles from './NotesPage.module.css'
import NoteContainer from "../../components/NoteContainer/NoteContainer";
import SearchField from "../../components/SearchField/SearchField";
import SideBarLayout from "../../components/SideBarLayout/SideBarLayout";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import makeDateReadable from "../../helpers/makeDateReadable";
import addItemToLocalStorage from "../../helpers/addItemToLocalStorage";
import NoteEditor from "../../components/NoteEditor/NoteEditor";


export const NoteContext = createContext(null);

const NotesPage = () => {
    const [notes, setNotes] =
        React.useState(JSON.parse(localStorage.getItem("notes"))
        ? JSON.parse(localStorage.getItem("notes"))
        : []
    );

    const [isModalActive, setIsModalActive] = React.useState(false);
    const [currentData, setCurrentData] = React.useState(null);

    function toggleModal(data) {
        setIsModalActive(!isModalActive);
        setCurrentData(data);
    }

    function createNote(color) {
        const newNote = {
            id: Date.now(),
            name: "This is NTPP note.",
            description: 'NTPP note',
            options: {
                favorite: {
                    defaultValue: false,
                    values: [true, false],
                    mode: 'toggle'
                },
                color: {
                    defaultValue: color,
                    mode: 'colorPick'
                },
                size: {
                    defaultValue: 'medium',
                    values: ['medium', 'large'],
                    mode: 'toggle'
                },
                date: {
                    defaultValue: makeDateReadable(new Date()),
                    mode: 'text'
                }
            }
        }
        addItemToLocalStorage('notes', newNote);
        setNotes([...notes, newNote]);
    }
    return (
        <NoteContext.Provider value={{createNote, notes}}>
            <main className={styles.noteWrapper}>
                <SideBarLayout></SideBarLayout>
                <section className={styles.note}>
                    <SearchField></SearchField>
                    <NoteContainer toggleModal={toggleModal}></NoteContainer>
                </section>
            </main>
            <ModalWindow setVisible={toggleModal} visible={isModalActive}>
                {<NoteEditor noteData={currentData}/>}
            </ModalWindow>
        </NoteContext.Provider>

    );
};

export default NotesPage;