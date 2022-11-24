import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CategoryWiseProducts = () => {
    const products = useLoaderData()
    const { image, dateOfPost, purchaseYear, description, location, phone, price, condition, name } = products


    console.log(products);
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5'>

            {
                products.map(product =>
                    <div class="w-full max-w-sm overflow-hidden rounded-lg bg-base-100 shadow-lg">
                        <img class="object-cover object-center w-full h-56" src={product.image} alt="avatar" />

                        <div class="flex items-center px-6 py-3">
                            <h1 class="mx-3 text-lg font-semibold  ">$ {product.price}</h1>
                        </div>

                        <div class="px-6 py-4">
                            <h1 class="text-xl font-semibold  ">{product.name} </h1>

                            <p class="py-2   ">{product.description} </p>

                            <div class="flex justify-between mt-4    ">
                                <div className="flex">
                                    <p><strong>Original:</strong> $</p>
                                    <h1 class="px-2 text-sm">{product.buyingPrice} </h1>
                                </div>
                                <div className="flex">
                                    Years of Use : {product.yearsOfUse}
                                </div>
                            </div>
                            <div class="flex items-center mt-4    ">
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <h1 class="px-2 text-sm">{product.location} </h1>
                            </div>

                            <div class="flex items-center mt-4    ">
                                <FaPhoneAlt></FaPhoneAlt>

                                <h1 class="px-2 text-sm">{product.phone}</h1>
                            </div>

                            <div class="flex items-center mt-4    ">
                                <svg aria-label="email icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
                                </svg>

                                <h1 class="px-2 text-sm">patterson@example.com</h1>
                            </div>
                        </div>
                    </div>)
            }



        </div>
    );
};

export default CategoryWiseProducts;