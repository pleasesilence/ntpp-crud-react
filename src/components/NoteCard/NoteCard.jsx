import React, {useState} from 'react';
import styles from './NoteCard.module.css';

function NoteCard({noteColor, isSelected, ...props}) {
    const [isFavorite, setIsFavorite] = useState(false);

    function makeFavorite(e) {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    }

    return (
        <div style={{backgroundColor: noteColor}} className={isSelected ? [styles.noteCard, styles.noteCard_selected].join(' ') : styles.noteCard}>
            <div className={styles.noteCard__content}>
                <p className={styles.noteCard__text}>Launching exo-machine. A computer that can be a monster gaming with videohosting and houseediting</p>
                <p className={styles.noteCard__text}>May 12, 2021 </p>
            </div>
            <div className={styles.noteCard__btns}>
                <button className={styles.noteCard__btn} onClick={makeFavorite}>
                    {isFavorite ? (
                        <img src="/icons/star.svg" alt="star-icon"/>
                    ) : <img src="/icons/star_inactive.svg" alt="star-icon"/>}
                </button>
                {isSelected ? (
                    <button className={styles.noteCard__btn}>
                        <img src="/icons/pen.svg" alt="pen-icon"/>
                    </button>
                ) : <></>}
            </div>
        </div>
    )
}

export default NoteCard;