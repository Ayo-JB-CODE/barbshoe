import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrumb/BreadCrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const { itemProducts } = useContext(ShopContext);
    const { productId } = useParams();
    const product = itemProducts.find((e) => e.id === Number(productId));
    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />

        </div>
    )
}

export default Product;