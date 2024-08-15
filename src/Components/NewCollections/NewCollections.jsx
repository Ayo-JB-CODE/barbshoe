import Items from '../Items/Items';
import styles from './NewCollections.module.css';
import { newCollectionsItems } from '../../../newCollectionsData';


const NewCollections = () => {
    return (
        <div className={styles.newCollections_container}>
            <h1>New Collections</h1>
            <hr />
            <div className={styles.newCollections_items}>
                {newCollectionsItems.map((item, i) => {
                    return <Items
                        image={item.img}
                        title={item.title}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        key={i}
                    />
                })}
            </div>
        </div>
    )
}

export default NewCollections;