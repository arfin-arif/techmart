import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
const ProductCard = ({ product, setProductInfo }) => {
    const { image, buyingPrice, yearsOfUse, seller, dateOfPost, purchaseYear, description, sellerLocation, phone, price, condition, name } = product
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg bg-base-100 shadow-lg">
            <img className="object-cover object-center w-full " src={image} alt="avatar" />

            {/* <div className="flex items-center px-6 py-3">
            <h1 className="mx-3 text-lg font-semibold  ">$ { price}</h1>
        </div> */}

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold  ">{name} </h1>

                <p className="py-2   ">{description} </p>

                <div className="flex justify-between mt-4    ">
                    <div className="flex">
                        <p><strong>Original:</strong> $</p>
                        <h1 className="px-2 text-sm">{buyingPrice} </h1>
                    </div>
                    <div className="flex">
                        Years of Use : {yearsOfUse}
                    </div>
                </div>
                <div className="flex justify-between mt-4    ">
                    <div className="flex">
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <h1 className="px-2 text-sm">{sellerLocation} </h1>

                    </div>
                    <div className="flex">

                        <FaUserAlt></FaUserAlt>
                        <h1 className="px-2 text-sm">{seller}</h1>

                    </div>


                </div>

                <div className="flex justify-between mt-4    ">
                    <div className="flex">
                        <FaPhoneAlt></FaPhoneAlt>

                        <h1 className="px-2 text-sm">{phone}</h1>
                    </div>
                    <div className="flex">
                        <FaClock></FaClock>
                        <h1 className="px-2 text-sm">{dateOfPost?.slice(0, 10)}</h1>
                    </div>
                </div>


            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto ">

                <div className="w-56 mt-4 overflow-hidden bg-sky-300 rounded-lg shadow-lg md:w-64">
                    <h3 className="py-2 font-bold tracking-wide text-center uppercase dark:text-white">Ready To Buy?</h3>

                    <div className="flex items-center justify-between px-3 py-2">
                        <span className="font-bold">${price}</span>
                        <button

                            className="px-2 btn btn-sm btn-success py-1 text-xs font-semibold uppercase "><label htmlFor="booking-modal" onClick={() => setProductInfo(product)}>Book Now</label></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;