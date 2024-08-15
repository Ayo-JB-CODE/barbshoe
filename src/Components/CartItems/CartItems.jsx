import React, { useState } from "react";
import styles from './CartItems.module.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItems = () => {

    const { getTotalCartAmount, itemProducts, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className={styles.cartitems}>
            <div className={styles.cartitems_format_main}>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {itemProducts.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className={styles.cartitems_format.cartitems_format_main}>
                            <img src={e.img} alt="" className={styles.carticon_product_icon} />
                            <p>{e.title}</p>
                            <p>${e.new_price}</p>
                            <button className={styles.cartitems_quantity}>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className={styles.cartitems_remove_icon} src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className={styles.cartitems_down}>
                <div className={styles.cartitems_total}>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className={styles.cartitems_total_item}>
                            <p>Subtotal</p>
                            <p></p>
                            <span>${getTotalCartAmount()}</span>
                        </div>
                        <hr />
                        <div className={styles.cartitems_total_item}>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className={styles.cartitems_total_item}>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button content="PROCEED TO CHECKOUT" />
                </div>
                <div className={styles.cartitems_promocode}>
                    <p>If you have a promo code, Enter it here</p>
                    <div className={styles.cartitems_promobox}>
                        <input type="text" placeholder="promo code" />
                        <button content="Submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;