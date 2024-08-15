import styles from './ItemSelected.module.css';
import product14 from '../../assets/product14.jpg';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const ItemSelected = () => {
    return (
        <div className={styles.itemselected_container}>
            <div className={styles.itemselected_left}>
                <div className={styles.itemselected_imglist}>
                    <img src={product14} alt="" />
                    <img src={product14} alt="" />
                    <img src={product14} alt="" />
                    <img src={product14} alt="" />
                </div>
                <div className={styles.itemselected_mainimg}>
                    <img src={product14} alt="" />
                </div>
            </div>
            <div className={styles.itemselected_right}>
                <div className={styles.itemselectedright_title}>
                    <h1>Title of Selected Item</h1>
                    <div className={styles.itemselectedright_rating}>
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                </div>
                <div className={styles.itemselectedright_price}>
                    <p>#35,000</p>
                    <p><span>#39,000</span></p>
                </div>
                <div className={styles.itemselectedright_description}>
                    <p>A lightweight, usually fitted, quality material, close-fitting and a round heel and short ankle, worn as footwear or outer trainers.</p>
                </div>
                <div className={styles.itemselectedright_size}>
                    <h1>Select Size</h1>
                    <div className={styles.itemselectedright_sizes}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className={styles.cart_button}>
                    <Button content='ADD TO CART' />
                </div>
                <div className={styles.itemselectedright_category}>
                    <p><span>Category:</span> Unisex Sneakers</p>
                    <p><span>Tag:</span> Quality, Mordern</p>
                </div>
            </div>
        </div>
    )
}

export default ItemSelected;