import React from 'react';
import {useParams} from 'react-router';
import styles from "./NotePageId.module.css";
import {ReactComponent as StarSvg} from "../../assets/icons/star.svg";
import SideBarLayout from "../../components/SideBarLayout/SideBarLayout";

const NotePageId = () => {
    const params = useParams();

    const localStorageData = JSON.parse(localStorage.getItem('notes'))
    let thisNoteData
    localStorageData.forEach((note) => {
        if (String(params.id) === String(note.id)) {
            thisNoteData = note
        }
    })

    return (
        <>
            <SideBarLayout isCreateActive={false}></SideBarLayout>
            <div className={styles.notePageId}>
                <div style={{backgroundColor: thisNoteData.options.color.value}} className={styles.notePageId__bg}></div>
                <section className={styles.notePageId__content}>
                    <div className={styles.content__titleWrapper}>
                        <h1 className={styles.content__title}>{thisNoteData.name}</h1>
                        { thisNoteData.options.favorite.value ? (
                            <StarSvg></StarSvg>
                        ): <></>}
                    </div>
                    <hr/>
                    <pre className={styles.content__description}>
                        {thisNoteData.description}
                    </pre>
                </section>
            </div>
        </>
    );
};

export default NotePageId;