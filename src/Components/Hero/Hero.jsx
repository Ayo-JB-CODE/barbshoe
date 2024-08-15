import styles from './Hero.module.css';
import products_6 from '../../assets/product6.png';
import Button from '../Button/Button';
const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_content}>
                <h1>OUR PRODUCTS ARE</h1>
                <div className={styles.flip}>
                    <div><div><h1>FASHIONABLE</h1></div></div>
                    <div><div><h1>COMFORTABLE</h1></div></div>
                    <div><div><h1>AFFORDABLE</h1></div></div>
                </div>
                <h1>FOR ALL OCASSIONS</h1>
                <Button content='Learn More' />
            </div>
            <img src={products_6} alt="" />
        </div>
    )
}

export default Hero;