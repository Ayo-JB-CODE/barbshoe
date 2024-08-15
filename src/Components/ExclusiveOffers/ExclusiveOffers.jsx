import Button from '../Button/Button';
import styles from './ExclusiveOffers.module.css';

const ExclusiveOffers = () => {
    return (
        <div className={styles.exclusive_container}>
            <div className={styles.exclusive_content}>
                <h1>Exclusive Offers</h1>
                <h1>Ju<span>st For You</span></h1>
                <p>ONLY BEST <span>SELLERS PRODUCTS</span></p>
                <Button content='Check Now' />
            </div>
        </div>
    )
}

export default ExclusiveOffers