import React from 'react';
import './carousel.css'

const CarouselImage = ({ slider }) => {
    return (
        <div id={`slide${slider.id}`} className="carousel-item flex-none relative w-full">
            <div className='carousel-effect'>
                <img src={slider.image} alt="" className=" grayscale   rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 top-2/4 left-24">
                <h1 className='text-white text-6xl font-bold  '>
                    We Sell Again <br />
                    With Quality
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 top-3/4 left-24 w-2/5">
                <p className='text-white text-xl '> Start Selling and Buying from us we ensure the best quality. Pleas Join Us now and enjoy the deal!</p>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${slider.prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${slider.next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CarouselImage;