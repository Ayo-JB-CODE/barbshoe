import styles from './BreadCrumb.module.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const BreadCrumb = (props) => {
    const { product } = props;
    return (
        <div className={styles.breadcrumb_container}>
            HOME <img src={arrow_icon} alt="" />  SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.title}
        </div>
    )
}

export default BreadCrumb;

{/* <NavBar />
            <div className={styles.breadcrumb_container}>
                Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> Title <img src={arrow_icon} alt="" /> Name
            </div>
            <ItemSelected />
            <Footer /> */}