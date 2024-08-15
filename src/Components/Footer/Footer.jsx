import styles from './Footer.module.css';
import instagram_icon from '../../assets/instagram_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';
import facebook_icon from '../../assets/facebook_icon.svg';
import x_icon from '../../assets/x_icon.svg';
import youtube_icon from '../../assets/youtube_icon.svg';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_logo}>
                <a href="/">BARB-STORE</a>
            </div>
            <div className={styles.footer_menus}>
                <a href="/">Company</a>
                <a href="/Shop">Products</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
            </div>
            <div className={styles.footer_social_icons}>
                <img src={facebook_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={x_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
                <img src={youtube_icon} alt="" />
            </div>
            <hr />
            <div className={styles.copy_right}>
                <p>Copyright &copy; 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;