import React, {useState} from 'react';
import styles from './SearchField.module.css'

const SearchField = () => {
    const [searchField, setSearchField] = useState('')

    return (
        <div className={styles.searchField}>
            <input onChange={(e) => setSearchField(e.target.value)} value={searchField} placeholder='Search' type="text" className={styles.searchField__input}/>
        </div>
    );
};

export default SearchField;