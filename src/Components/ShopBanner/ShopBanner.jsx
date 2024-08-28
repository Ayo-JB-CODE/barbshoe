import styles from './ShopBanner.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ShopBanner = () => {
    return (
        <div className={styles.shopbanner_container}>
            <div className={styles.shopbanner_hero}>
                <div className={styles.shopbanner_content}>
                    <h1>flat 50% off</h1>
                    <h2>12 <span>hours </span>20 <span>min</span></h2>
                    <Link to="/"><Button content='Explore Now' /></Link>
                </div>
            </div>
        </div>
    )
}

export default ShopBanner;