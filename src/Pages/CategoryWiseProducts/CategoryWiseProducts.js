import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Modal from './Modal/Modal';
import ProductCard from './ProductCard/ProductCard';

const CategoryWiseProducts = () => {
    const [productInfo, setProductInfo] = useState('');
    const products = useLoaderData();



    console.log(products);
    return (
        <div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5'>
                {
                    products.map(product =>
                        <ProductCard key={product._id}
                            setProductInfo={setProductInfo}
                            product={product}></ProductCard>)
                }
            </div>
            <Modal
                setProductInfo={setProductInfo}
                productInfo={productInfo} ></Modal>

        </div>
    );
};

export default CategoryWiseProducts;