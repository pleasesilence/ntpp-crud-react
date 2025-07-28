import React from 'react';
import styles from './NoteCard.module.css';

function NoteCard(props) {
    console.log(props)

    return (
        <div className={styles.noteCard}>
            <div className={styles.noteCard__info}>
                <p className={styles.noteCard__body}>{props.note.body}</p>
                <p className={styles.noteCard__data}>{props.note.data}</p>
            </div>
            <div className={styles.noteCard__btns}>
                <button className={styles.noteCard__btn}>
                    <img src="/icons/star.svg" alt="star icon"/>
                </button>
                <button className={styles.noteCard__btn}>
                    <img src="/icons/pen.svg" alt="pen icon"/>
                </button>
            </div>
        </div>
    );
}

export default NoteCard;