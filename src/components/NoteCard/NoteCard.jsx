import React, {useContext, useState} from 'react';
import styles from './NoteCard.module.css';
import {SelectContext} from "../NoteContainer/NoteContainer";
import {ReactComponent as StarSvg} from "../../assets/icons/star.svg";
import {ReactComponent as PenSvg} from "../../assets/icons/pen.svg";
import {useNavigate} from 'react-router';

function NoteCard({noteData, selectNote, toggleModal, ...props}) {
    const whatIsSelected = useContext(SelectContext);
    const isFavorite = noteData.options.favorite.value
    const size = noteData.options.size.value

    const navigate = useNavigate();
    function handleCardClick() {
        navigate(`/notes/${noteData.id}`);
    }

    function handleEditClick(event) {
        event.stopPropagation();
        toggleModal(noteData)
    }

    function calcSize() {
        return size === 'Medium' ? 250 : 350
    }

    const noteCardStyles = {
        backgroundColor: noteData.options.color.value,
        width: calcSize() + 'px'
    }

    return (
        <article
            style={noteCardStyles}
            onMouseEnter={() => selectNote(noteData.id)}
            onMouseLeave={() => selectNote('')}
            className={whatIsSelected === noteData.id ? [styles.noteCard, styles.noteCard_selected].join(' ') : styles.noteCard}
            onClick={handleCardClick}
        >
            <div className={styles.noteCard__content}>
                <p className={styles.noteCard__text}>{noteData.name}</p>
                <p className={styles.noteCard__text}>{noteData.options.date.value}</p>
            </div>
            <div className={styles.noteCard__btns}>
                <div
                    className={isFavorite ?
                        [styles.noteCard__btn, styles.noteCard__btn_favorite].join(' ')
                        : styles.noteCard__btn}
                >
                    <StarSvg></StarSvg>
                </div>
                {whatIsSelected === noteData.id ? (
                    <button onClick={handleEditClick} className={styles.noteCard__btn}>
                        <PenSvg></PenSvg>
                    </button>
                ) : <></>}
            </div>
        </article>
    )
}

export default NoteCard;