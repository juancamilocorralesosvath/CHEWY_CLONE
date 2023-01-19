import React from 'react'

// Styles
import styles from './SearchBar.module.css'

// Icons
import cancelIcon from '../../assets/icons/cancel.png'
import searchIcon from '../../assets/icons/search.png'

const SearchBar = () => {
    return (
        <form className={styles.searchBar}>
            <input
                className={styles.input}
                type='text'
                placeholder='Search'
            />
            <button className={styles.button}>
                <img className={styles.icon} src={cancelIcon} alt='icon' />
            </button>
            <button className={styles.button}>
                <img className={styles.icon} src={searchIcon} alt='icon' />
            </button>
        </form>
    )
}

export default SearchBar