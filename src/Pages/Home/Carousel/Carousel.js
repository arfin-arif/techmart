import React from 'react';
import CarouselImage from './CarouselImage';

import image1 from '../../../assets/image (1).jpg'
import image2 from '../../../assets/image (2).jpg'
import image3 from '../../../assets/image (3).jpg'

const Carousel = () => {

    const bannerData = [
        {
            image: image1,
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: image2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: image3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: image2,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: image3,
            prev: 4,
            id: 5,
            next: 1
        },

    ]

    return (
        <div className="carousel w-full">

            {
                bannerData.map(slider =>
                    <CarouselImage slider={slider}
                        key={slider.id}></CarouselImage>)
            }


        </div>
    );
};

export default Carousel;