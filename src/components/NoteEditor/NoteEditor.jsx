import React from 'react';
import styles from "./NoteEditor.module.css";
import Option from "../Option/Option";

function NoteEditor({noteData}) {
    if (!noteData || noteData.target) {
        return (
            <></>
        )
    }

    const noteDataOptions = Object.keys(noteData.options);
    const noteDataOptionsValues = Object.values(noteData.options);

    return (
        <section className={styles.editor}>
            <div className={styles.editor__wrapper}>
                <div className={styles.editor__header}>
                    <div className={styles.editor__subtitle}>Editing note</div>
                    <div className={styles.editor__name}>{noteData.name}</div>
                    <div className={styles.editor__options}>
                        <div className={styles.editor__optionsNames}>
                            {noteDataOptions.map(option => (
                                <div key={option} className={styles.editor__optionName}>
                                    {option[0].toUpperCase() + option.slice(1)}
                                </div>
                            ))}
                        </div>
                        <div className={styles.editor__optionsValues}>
                            {noteDataOptionsValues.map((optionValue, index) => (
                                <Option mode={optionValue.mode} key={optionValue.defaultValue} className={styles.editor__optionValue}>
                                    {String(optionValue.defaultValue)}
                                </Option>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.editor__body}>

                </div>
                <div className="editor__body"></div>
            </div>
        </section>
    );
}

export default NoteEditor;