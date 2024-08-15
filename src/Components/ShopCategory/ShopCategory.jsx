import styles from './ShopCategory.module.css';
import dropdown_icon from '../../assets/dropdown_icon.png';
import itemProducts from '../../../data';
import { ShopContext } from '../../Context/ShopContext';
import Items from '../Items/Items';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ShopCategory = (props) => {
    const { itemProducts } = useContext(ShopContext);
    return (
        <div className={styles.shopcategory_container}>
            <div className={styles.shopcategory_sort}>
                <p><span>Showing 1-20</span> out of 60 products</p>
                <div>
                    sort <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className={styles.shopcategory_items}>
                {itemProducts.map((item, i) => {
                    return <Items
                        id={item.id}
                        image={item.img}
                        title={item.title}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        key={i}
                    />
                })}
            </div>
            <div className={styles.shopcategory_button}>
                <Button content='Explore More' />
            </div>

        </div>
    )
}

export default ShopCategory;