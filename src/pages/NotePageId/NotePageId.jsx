import React from 'react';
import {useParams} from 'react-router';
import Header from "../../components/Header/Header";
import styles from "./NotePageId.module.css";
import {ReactComponent as StarSvg} from "../../assets/icons/star.svg";

const NotePageId = () => {
    const params = useParams();

    const localStorageData = JSON.parse(localStorage.getItem('notes'))
    let thisNoteData
    localStorageData.forEach((note) => {
        if (String(params.id) === String(note.id)) {
            thisNoteData = note
        }
    })
    console.log(thisNoteData);

    return (
        <div className={styles.notePageId}>
            <Header></Header>
            <div style={{backgroundColor: thisNoteData.options.color.value}} className={styles.notePageId__bg}></div>
            <section className={styles.notePageId__content}>
                <div className={styles.content__titleWrapper}>
                    <h1 className={styles.content__title}>{thisNoteData.name}</h1>
                    { thisNoteData.options.favorite.value ? (
                        <StarSvg></StarSvg>
                    ): <></>}
                </div>
                <hr/>
                <p className={styles.content__description}>
                    <pre>
                        {thisNoteData.description}
                    </pre>
                </p>
            </section>
        </div>
    );
};

export default NotePageId;