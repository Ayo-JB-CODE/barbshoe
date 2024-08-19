import React, { useContext, useState } from 'react'
import styles from './NavBar.module.css';
import cart_icon from '../../assets/cart_icon.png';
import user_icon from '../../assets/user-icon.svg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const NavBar = () => {
    const [menu, setMenu] = useState("home")
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className={styles.nav_bar}>
            <div className={styles.nav_logo}>
                <Link to='/'>BARB-STORE</Link>
            </div>
            <div className={styles.nav_menus}>
                <div><Link onClick={() => { setMenu("home") }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</div>
                <div><Link onClick={() => { setMenu("shop") }} to="/Shop">Shop</Link>{menu === "shop" ? <hr /> : <></>}</div>
                <div><Link onClick={() => { setMenu("contact") }} to="/Contact">Contact</Link>{menu === "contact" ? <hr /> : <></>}</div>
            </div>
            <div className={styles.login_n_cart}>
                <div className={styles.nav_login}>
                    <img src={user_icon} alt="user_icon" />
                    <div><Link onClick={() => { setMenu("login") }} to="/Login">Login</Link>{menu === "login" ? <hr /> : <></>}</div>
                </div>
                <div className={styles.cart_icon}>
                    <div><Link onClick={() => { setMenu("cart") }} to="/Cart"><img src={cart_icon} alt="cart_icon" /></Link>{menu === "cart" ? <hr /> : <></>}</div>
                    <div className={styles.cart_count}>{getTotalCartItems()}</div>
                </div>

            </div>
        </div>
    )
}

export default NavBar;