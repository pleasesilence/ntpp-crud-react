import React from 'react';
import styles from './Toggle.module.css';

const Toggle = ({action, isChecked, id}) => {

    const [checked, setChecked] = React.useState(false);

    const toggleBodyClasses = [styles.toggle__body]
    if (checked) {
        toggleBodyClasses.push(styles.toggle__body_active);
    }

    function handleToggle() {
        action();
        setChecked(!checked);
    }

    return (
        <button onClick={handleToggle} className={toggleBodyClasses.join(' ')}>
            <div className={styles.toggle__circle}></div>
        </button>
    );
};

export default Toggle;