import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const ProductCategories = () => {


    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">



            {
                categories.map(category => <section className="">
                    <div className="container px-6 py-10 mx-auto ">

                        <div className="bg-sky-100 flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-base-300 dark:border-gray-700 dark:hover:border-transparent">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={category.image} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700  dark:text-white group-hover:text-black">{category.title}</h1>


                            <button className='btn btn-success  hover:btn-success-focus'> <Link to={`/category/${category._id}`}>All Products</Link></button>
                        </div>

                    </div>
                </section>)
            }





































        </div>
    );
};

export default ProductCategories;