import React, { useContext } from 'react'
import styles from './Items.module.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Items = ({ id, image, title, new_price, old_price }) => {
    const { addToCart } = useContext(ShopContext);
    return (
        <div className={styles.item_container}>
            {/* <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link> */}
            <div className={styles.img_container}>
                <Link to={`/product/${id}`}><img src={image} alt={image} /></Link>
                <h3>{title}</h3>
            </div>
            <div className={styles.prices}>
                <p>NGN {new_price}</p>
                <p>NGN {old_price}</p>
            </div>
            <div className={styles.add_tocart}><button onClick={() => { addToCart({ id }) }}>Add To Cart</button></div>
        </div>
        // <div className={styles.item_container}>
        //     <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.img} alt="" /></Link>
        //     <p>{props.title}</p>
        //     <div className={styles.item_prices}>
        //         <div className={styles.item_price_new}>
        //             ${props.new_price}
        //         </div>
        //         <div className={styles.item_old_new}>
        //             ${props.old_price}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Items;

{/* <div className={styles.item_container}>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            <div className={styles.img_container}>
                <img src={image} alt={image} />
                <h3>{title}</h3>
            </div>
            <div className={styles.prices}>
                <p>NGN {new_price}</p>
                <p>NGN {old_price}</p>
            </div>
            <div className={styles.add_tocart}><button>Add To Cart</button></div>
        </div> */}