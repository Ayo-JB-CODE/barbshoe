import styles from './ShopBanner.module.css';
import Button from '../Button/Button';

const ShopBanner = () => {
    return (
        <div className={styles.shopbanner_container}>
            <div className={styles.shopbanner_hero}>
                <div className={styles.shopbanner_content}>
                    <h1>flat 50% off</h1>
                    <h2>12 <span>hours </span>20 <span>min</span></h2>
                    <Button content='Explore Now' />
                </div>
            </div>
        </div>
    )
}

export default ShopBanner;