import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrumb/BreadCrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
// import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
// import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
    const { itemProducts } = useContext(ShopContext);
    const { productId } = useParams();
    const product = itemProducts.find((e) => e.id === Number(productId));
    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
            {/* <DescriptionBox />
            <RelatedProduct /> */}

        </div>
    )
}

export default Product;