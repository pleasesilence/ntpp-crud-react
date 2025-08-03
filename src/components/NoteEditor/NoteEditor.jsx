import React, {useEffect, useRef, useState} from 'react';
import styles from "./NoteEditor.module.css";

import {ReactComponent as StarSvg} from "../../assets/icons/editor/star.svg";
import {ReactComponent as SizeSvg} from "../../assets/icons/editor/size.svg";
import {ReactComponent as DateSvg} from "../../assets/icons/editor/date.svg";
import {ReactComponent as ColorSvg} from "../../assets/icons/editor/color.svg";
import {ReactComponent as SaveSvg} from "../../assets/icons/editor/save.svg";
import {ReactComponent as DeleteSvg} from "../../assets/icons/editor/delete.svg";

import {deleteNote, updateNote} from "../../helpers/noteDataControl";
import {useTranslate} from "../../hooks/useTranslate";

function NoteEditor({noteData, updateState, currentNotes, disableVisible}) {
    const options = noteData.options
    const [favoriteState, setFavoriteState] = useState(options.favorite.value);
    const [sizeState, setSizeState] = useState(options.size.value);
    const [descriptionState, setDescriptionState] = useState(noteData.description);
    const [nameState, setNameState] = useState(noteData.name);

    const textarea = useRef(null);

    useEffect(() => {
        textarea.current.style.height = textarea.current.scrollHeight + "px";
    }, [])

    function handleTextarea(event) {
        setDescriptionState(event.target.value);
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + "px";
    }

    function toggleFavoriteState() {
        setFavoriteState(!favoriteState);
    }
    const favoriteClasses = [styles.editor__optionFavorite]
    if (favoriteState) {
        favoriteClasses.push(styles.editor__optionFavorite_active)
    }

    function toggleSizeState() {
        if (sizeState === 'Medium') {
            setSizeState('Large');
        } else {
            setSizeState('Medium');
        }
    }
    let sizeClass
    if (sizeState === 'Medium') {
        sizeClass = styles.editor__optionSize_medium
    } else {
        sizeClass = styles.editor__optionSize_large
    }

    const editorStates = {
        favoriteState: favoriteState,
        sizeState: sizeState,
        descriptionState: descriptionState,
        nameState: nameState,
    }

    function updateNoteAndState(noteData) {
        let oldNoteIndex;
        let copyCurrentNotes = currentNotes;
        copyCurrentNotes.forEach((note, index) => {
            if (noteData.id === note.id) {
                oldNoteIndex = index
            }
        })
        if (oldNoteIndex > -1) {
            copyCurrentNotes.splice(oldNoteIndex, 1)
        }
        const updatedNote = updateNote(noteData, editorStates)
        updateState([...copyCurrentNotes, updatedNote])
        disableVisible()
    }

    function deleteNoteAndUpdateState(noteData) {
        let oldNoteIndex;
        let copyCurrentNotes = currentNotes;
        copyCurrentNotes.forEach((note, index) => {
            if (noteData.id === note.id) {
                oldNoteIndex = index
            }
        })
        if (oldNoteIndex > -1) {
            copyCurrentNotes.splice(oldNoteIndex, 1)
        }
        updateState([...deleteNote(noteData)])
        disableVisible()
    }

    const {translate} = useTranslate();


    return (
        <section className={styles.editor}>
            <div className={styles.editor__wrapper}>
                <div className={styles.editor__header}>
                    <div className={styles.editor__subtitle}>{translate('modal.subtitle')}</div>
                    <input
                        name='Note name'
                        className={styles.editor__name}
                        type="text"
                        value={nameState}
                        onChange={e => setNameState(e.target.value)}
                    />
                    <div className={styles.editor__options}>
                        <div className={styles.editor__optionsNames}>
                            <div className={styles.editor__optionName}>
                                <StarSvg></StarSvg>
                                <div>{translate('modal.options.status')}</div>
                            </div>
                            <div className={styles.editor__optionName}>
                                <SizeSvg></SizeSvg>
                                <div>{translate('modal.options.size')}</div>
                            </div>
                            <div className={styles.editor__optionName}>
                                <ColorSvg></ColorSvg>
                                <div>{translate('modal.options.color')}</div>
                            </div>
                            <div className={styles.editor__optionName}>
                                <DateSvg></DateSvg>
                                <div>{translate('modal.options.date')}</div>
                            </div>
                        </div>
                        <div className={styles.editor__optionsValues}>
                            <button
                                onClick={toggleFavoriteState}
                                className={favoriteClasses.join(' ')}
                            >
                                {favoriteState ? translate('modal.values.favorite') : translate('modal.values.default')}
                            </button>
                            <button
                                onClick={toggleSizeState}
                                className={sizeClass}
                            >
                                {sizeState === 'Medium' ? translate('modal.values.medium') : translate('modal.values.large')}
                            </button>
                            <button
                                className={styles.editor__optionColor}
                                style={{backgroundColor: options.color.value}}
                            >
                                {options.color.value}
                            </button>
                            <button className={styles.editor__optionDate}>
                                {options.date.value}
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.editor__description}>
                        <div className={styles.description__subtitle}>{translate('modal.description')}</div>
                        <div>
                            <textarea
                                ref={textarea}
                                name="description"
                                className={styles.description__content}
                                value={descriptionState}
                                onChange={handleTextarea}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => updateNoteAndState(noteData, editorStates)}
                className={styles.editor__save}
            >
                <SaveSvg></SaveSvg>
            </button>
            <button
                onClick={() => deleteNoteAndUpdateState(noteData)}
                className={styles.editor__delete}
            >
                <DeleteSvg></DeleteSvg>
            </button>
        </section>
    );
}

export default NoteEditor;