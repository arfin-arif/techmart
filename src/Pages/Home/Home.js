import React from 'react';
import Carousel from './Carousel/Carousel';
import ProductCategories from './ProductCategories/ProductCategories';
import PromotedProducts from './PromotedProducts/PromotedProducts';
import WhyChoseUs from './WhyChoseUs/WhyChoseUs';

const Home = () => {
    return (
        <div className='mb-5'>
            <Carousel></Carousel>
            <ProductCategories></ProductCategories>
            <WhyChoseUs />
            <PromotedProducts></PromotedProducts>
        </div>
    );
};

export default Home;