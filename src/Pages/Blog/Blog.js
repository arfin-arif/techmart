import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl ">From the blog</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <Link to='/blog/1' className="text-xl font-semibold text-gray-800 hover:underline  ">
                                What are the different ways to manage a state in a React application
                            </Link>

                            <span className="text-sm ">November 2022</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <Link to='/blog/2' className="text-xl font-semibold text-gray-800 hover:underline  ">
                                How does prototypical inheritance work?
                            </Link>

                            <span className="text-sm ">November 2022</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <Link to='/blog/3' className="text-xl font-semibold text-gray-800 hover:underline  ">
                                What is a unit test? Why should we write unit tests?
                            </Link>

                            <span className="text-sm ">November 2022</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <Link to='/blog/4' className="text-xl font-semibold text-gray-800 hover:underline  ">
                                React vs. Angular vs. Vue?
                            </Link>

                            <span className="text-sm ">November 2022</span>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default Blog;