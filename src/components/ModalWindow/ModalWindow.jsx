import React from 'react';
import styles from './ModalWindow.module.css';

function ModalWindow({children, visible, disableVisible}) {

    const rootStyles =  [styles.modal]
    if (visible) {
        rootStyles.push(styles.modal_active)
    }

    function handleClose() {
        disableVisible()
    }

    return (
        <div onClick={handleClose} className={rootStyles.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={styles.modal__content}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;