import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
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

                        {/* <div class="flex items-center px-6 py-3">
                            <h1 class="mx-3 text-lg font-semibold  ">$ {product.price}</h1>
                        </div> */}

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
                            <div class="flex justify-between mt-4    ">
                                <div className="flex">
                                    <FaMapMarkerAlt></FaMapMarkerAlt>
                                    <h1 class="px-2 text-sm">{product.location} </h1>

                                </div>
                                <div className="flex">

                                    <FaUserAlt></FaUserAlt>
                                    <h1 class="px-2 text-sm">{product.seller}</h1>

                                </div>


                            </div>

                            <div class="flex justify-between mt-4    ">
                                <div className="flex">
                                    <FaPhoneAlt></FaPhoneAlt>

                                    <h1 class="px-2 text-sm">{product.phone}</h1>
                                </div>
                                <div className="flex">
                                    <FaClock></FaClock>
                                    <h1 class="px-2 text-sm">{product.dateOfPost.slice(0, 10)}</h1>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto ">

                            <div class="w-56 mt-4 overflow-hidden bg-sky-300 rounded-lg shadow-lg md:w-64">
                                <h3 class="py-2 font-bold tracking-wide text-center uppercase dark:text-white">Nike Revolt</h3>

                                <div class="flex items-center justify-between px-3 py-2">
                                    <span class="font-bold">${product.price}</span>
                                    <button class="px-2 btn btn-sm btn-success py-1 text-xs font-semibold uppercase ">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }



        </div>
    );
};

export default CategoryWiseProducts;