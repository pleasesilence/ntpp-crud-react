import React, {useContext, useState} from 'react';
import styles from './NoteCard.module.css';
import {SelectContext} from "../NoteContainer/NoteContainer";
import {ReactComponent as StarSvg} from "../../assets/icons/star.svg";
import {ReactComponent as PenSvg} from "../../assets/icons/pen.svg";

function NoteCard({noteData, selectNote, toggleModal, ...props}) {
    const [isFavorite, setIsFavorite] = useState(false);
    function makeFavorite(e) {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    }

    const whatIsSelected = useContext(SelectContext);

    return (
        <article
            style={{backgroundColor: noteData.options.color.defaultValue}}
            onMouseEnter={() => selectNote(noteData.id)}
            onMouseLeave={() => selectNote('')}
            className={whatIsSelected === noteData.id ? [styles.noteCard, styles.noteCard_selected].join(' ') : styles.noteCard}
        >
            <div className={styles.noteCard__content}>
                <p className={styles.noteCard__text}>{noteData.name}</p>
                <p className={styles.noteCard__text}>{noteData.options.date.defaultValue}</p>
            </div>
            <div className={styles.noteCard__btns}>
                <button  className={isFavorite ? [styles.noteCard__btn, styles.noteCard__btn_favorite].join(' ') : styles.noteCard__btn} onClick={makeFavorite}>
                    <StarSvg></StarSvg>
                </button>
                {whatIsSelected === noteData.id ? (
                    <button onClick={() => toggleModal(noteData)} className={styles.noteCard__btn}>
                        <PenSvg></PenSvg>
                    </button>
                ) : <></>}
            </div>
        </article>
    )
}

export default NoteCard;