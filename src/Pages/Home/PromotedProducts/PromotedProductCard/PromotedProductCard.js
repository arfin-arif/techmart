import React from 'react';

const PromotedProductCard = ({ product }) => {
    const { image, _id, buyingPrice, yearsOfUse, seller, dateOfPost, purchaseYear, description, sellerLocation, phone, price, condition, name } = product
    return (



        <div className='border-2  rounded-xl'>
            <img className="object-cover w-full rounded-lg h-96 "
                src={image}
                alt="" />
            <h2 className="mt-4 ml-4 text-2xl font-semibold  capitalize ">{name}</h2>
            <p className="mt-2  ml-4  mb-4 text-lg tracking-wider  text-xl font-semibold  ">$ {price}</p>
        </div>


    );
};

export default PromotedProductCard;