import React from 'react';
import styles from './Option.module.css'
import Toggle from "../UI/Toggle/Toggle";

const Option = ({name, description, action, id, isChecked}) => {
    return (
        <div className={styles.option__wrapper}>
            <div className={styles.option__static}>
                <h3 className={styles.option__name}>{name}</h3>
                <p className={styles.option__description}>{description}</p>
            </div>
            <Toggle id={id} isChecked={isChecked} action={action}></Toggle>
        </div>
    );
};

export default Option;