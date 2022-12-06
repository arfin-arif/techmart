import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const ProductCategories = () => {


    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://techmart-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='bg-[#FDFDFD] text-center'>

            <div className="p-4  grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-cols-2 xl:grid-cols-4">



                {
                    categories.map(category => <section key={category._id} className="">
                        <div className="container px-6 py-10 mx-auto">

                            <div className="   border-primary	 hover:border-2 flex flex-col items-center p-8  rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white duration-300 ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4  hover:ring-slate-200" src={category.image} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold ">{category.title}</h1>


                                <button className='btn btn-success  hover:btn-success-focus'> <Link to={`/category/${category._id}`}>All Products</Link></button>
                            </div>

                        </div>
                    </section>)
                }


            </div>
            <button className='btn btn-primary mb-4 '>View All Categories</button>
        </div>

    );
};

export default ProductCategories;