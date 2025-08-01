import React from 'react';
import styles from './ModalWindow.module.css';

function ModalWindow({children, visible, setVisible}) {

    const rootStyles =  [styles.modal]

    if (visible) {
        rootStyles.push(styles.modal_active)
    }

    return (
        <div onClick={setVisible} className={rootStyles.join(' ')}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal__content}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;