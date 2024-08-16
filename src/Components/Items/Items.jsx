import React, { useContext } from 'react'
import styles from './Items.module.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Items = ({ id, image, title, new_price, old_price }) => {
    const { addToCart } = useContext(ShopContext);
    return (
        <div className={styles.item_container}>
            <div className={styles.img_container}>
                <Link to={`/product/${id}`}><img onClick={window.scrollTo(0, 0)} src={image} alt={image} /></Link>
                <h3>{title}</h3>
            </div>
            <div className={styles.prices}>
                <p>NGN {new_price}</p>
                <p>NGN {old_price}</p>
            </div>
        </div>
    )
}

export default Items;