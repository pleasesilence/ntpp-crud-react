import React, {useState} from 'react';
import styles from './SearchField.module.css'
import {useTranslate} from "../../hooks/useTranslate";

const SearchField = ({handleSearchChange}) => {
    const [searchField, setSearchField] = useState('')

    function handleChange(event) {
        setSearchField(event.target.value)
        handleSearchChange(event.target.value)
    }

    const {translate} = useTranslate()

    return (
        <div className={styles.searchField}>
            <input onChange={handleChange} value={searchField} placeholder={translate('notes.search')} type="text" className={styles.searchField__input}/>
        </div>
    );
};

export default SearchField;