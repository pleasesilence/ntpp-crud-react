import React from 'react';
import styles from './Option.module.css'

function Option({children, mode, ...props}) {

    const rootClasses = [styles.option]
    if (mode === 'toggle') {
        rootClasses.push(styles.option_toggle)
    } else if (mode === 'text') {
        rootClasses.push(styles.option_text)
    }

    return (
        <button className={rootClasses.join(' ')}>{children}</button>
    );
}

export default Option;