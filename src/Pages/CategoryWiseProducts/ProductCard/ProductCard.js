import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
const ProductCard = ({ product, setProductInfo }) => {
    const { image, _id, buyingPrice, yearsOfUse, status, seller, dateOfPost, purchaseYear, description, sellerLocation, phone, price, condition, name } = product
    const handleReport = id => {
        fetch(`https://techmart-server.vercel.app/products/report/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Your Report will solve admin')
                    console.log(data);
                }
            })
    }

    return (
        <div className=" w-full mt-0  max-w-sm overflow-hidden rounded-lg bg-base-100  shadow-lg">
            <img className="mt-0  object-fill max-h-48 w-96  object-center max-h-60  " src={image} alt="avatar" />
            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold  ">{name} </h1>
                <p className='text-lg font-semibold '>$ {price}</p>
                <p className="py-2   ">{description?.slice(0, 100)} ... </p>
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
                        {status === 'Verified Seller' && <  FaCheckCircle className='text-blue-300 text-xl'></FaCheckCircle>}
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
                        <button
                            className="px-2 btn btn-sm  py-1 text-xs font-semibold uppercase "><label onClick={() => handleReport(_id)}>Report</label>
                        </button>
                        <button
                            className="px-2 btn btn-sm btn-success py-1 text-xs font-semibold uppercase "><label htmlFor="booking-modal" onClick={() => setProductInfo(product)}>Book Now</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;