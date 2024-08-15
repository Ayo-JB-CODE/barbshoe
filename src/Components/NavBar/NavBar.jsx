import React, { useContext } from 'react'
import styles from './NavBar.module.css';
import cart_icon from '../../assets/cart_icon.png';
import user_icon from '../../assets/user-icon.svg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const NavBar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className={styles.nav_bar}>
            <div className={styles.nav_logo}>
                <Link to='/'>BARB-STORE</Link>
            </div>
            <div className={styles.nav_menus}>
                <Link to='/'>Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <div className={styles.login_n_cart}>
                <div className={styles.nav_login}>
                    <img src={user_icon} alt="user_icon" />
                    <Link to="/Login">Login</Link>
                </div>
                <div className={styles.cart_icon}>
                    <Link to="/Cart"><img src={cart_icon} alt="cart_icon" /></Link>
                    <div className={styles.cart_count}>{getTotalCartItems()}</div>
                </div>

            </div>
        </div>
    )
}

export default NavBar;