// Styles
import styles from './Navbar.module.css'

// Components
import SearchBar from '../search-bar/SearchBar.js'
import Logo from '../logo/Logo.js'
import rowDownIcon from '../../assets/icons/row-down.png'
import cartIcon from '../../assets/icons/cart.png'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo}>
                <Logo />
            </h1>
            <SearchBar />
            <div className={styles.dropDownsContainer}>
                <div className={styles.dropDownItem}>
                    <span>24/7 help</span>
                    <img className={styles.rowDown} src={rowDownIcon} alt='icon' />
                </div>
                <div className={styles.dropDownItem}>
                    <span>account</span>
                    <img className={styles.rowDown} src={rowDownIcon} alt='icon' />
                </div>
                <div className={styles.dropDownItem}>
                    <img className={styles.cartIcon} src={cartIcon} alt='icon' />
                    <span>cart</span>
                    <img className={styles.rowDown} src={rowDownIcon} alt='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar