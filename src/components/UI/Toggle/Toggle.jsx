import React from 'react';
import styles from './Toggle.module.css';

const Toggle = ({action, isChecked, id}) => {

    const [checked, setChecked] = React.useState(isChecked(id));
    const toggleBodyClasses = [styles.toggle__body]

    if (checked) {
        toggleBodyClasses.push(styles.toggle__body_active);
    }

    function handleToggle() {
        setChecked(!checked);
        action();
        const optionsState = JSON.parse(localStorage.getItem('optionsState'))
        localStorage.removeItem('optionsState')
        optionsState[id] = !checked
        localStorage.setItem('optionsState', JSON.stringify(optionsState));
    }

    return (
        <button onClick={handleToggle} className={toggleBodyClasses.join(' ')}>
            <div className={styles.toggle__circle}></div>
        </button>
    );
};

export default Toggle;