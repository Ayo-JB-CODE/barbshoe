import styles from './BreadCrumb.module.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const BreadCrumb = (props) => {
    const { product } = props;
    return (
        <div className={styles.breadcrumb_container}>
            HOME <img src={arrow_icon} alt="" />  SHOP <img src={arrow_icon} alt="" /> {product.title}
        </div>
    )
}

export default BreadCrumb;