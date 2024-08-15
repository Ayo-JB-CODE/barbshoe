import React from 'react';
import styles from './PopularProducts.module.css';
import { popularItems } from '../../../popularData';
import Items from '../Items/Items';

const PopularProducts = () => {
    return (
        <div className={styles.popular_container}>
            <h1>Popular Products</h1>
            <hr />
            <div className={styles.popular_items}>
                {popularItems.map((item, i) => {
                    return <Items
                        image={item.img}
                        title={item.title}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        key={i}
                    />
                })}
            </div>
        </div>
    )
}

export default PopularProducts;