import React, {useState} from 'react';
import styles from './NoteContainer.module.css';
import NoteCard from "../NoteCard/NoteCard";

const NoteContainer = () => {
    return (
        <div className={styles.noteContainer}>
            <h1 className={styles.noteContainer__title}>My notes</h1>
            <div className={styles.noteContainer__content}>
                <NoteCard noteColor='#E88A7F'></NoteCard>
                <NoteCard noteColor='#EBB466'></NoteCard>
                <NoteCard noteColor='#ABDC8E'></NoteCard>
            </div>
        </div>
    );
};

export default NoteContainer;