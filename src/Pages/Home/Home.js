import React from 'react';
import ProductCategories from './ProductCategories/ProductCategories';
import WhyChoseUs from './WhyChoseUs/WhyChoseUs';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <ProductCategories></ProductCategories>
            <WhyChoseUs />
        </div>
    );
};

export default Home;