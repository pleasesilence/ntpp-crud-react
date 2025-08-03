import React, {useEffect} from 'react';
import styles from './ModalWindow.module.css';

function ModalWindow({children, visible, disableVisible}) {

    const rootStyles =  [styles.modal]
    if (visible) {
        rootStyles.push(styles.modal_active)
    }

    function handleClick() {
        disableVisible()
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                disableVisible()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])



    return (
        <div onClick={handleClick} className={rootStyles.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={styles.modal__content}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;