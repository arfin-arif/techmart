import React from 'react';
import { FaShippingFast } from 'react-icons/fa';

const WhyChoseUs = () => {
    return (
        <>

            <section className="bg-stone-100 rounded-xl">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">We Provide High Quality Goods</h1>

                        <p className="mt-4  ">
                            A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 space-y-3 border-2 hover:bg-slate-300  rounded-xl">
                            <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 className="text-2xl font-semibold">Fast Deliverye</h1>

                            <p className="">
                                Chances are there wasn’t collaboration and checkpoints, there wasn’t a process.
                            </p>

                            <a href="#" className="inline-flex p-2 capitalize transition-colors duration-300 transform  rounded-full rtl:-scale-x-100 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-8 space-y-3 border-2 rounded-xl">
                            <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </span>

                            <h1 className="text-2xl font-semibold capitalize">Best Quality</h1>

                            <p className="">
                                It’s content strategy gone awry right from the start.
                            </p>

                            <a href="#" className="inline-flex p-2 capitalize transition-colors duration-300 transform  rounded-full rtl:-scale-x-100  h hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-8 space-y-3 border-2 rounded-xl">
                            <span className="inline-block ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 className="text-2xl font-semibold">Free Return</h1>

                            <p className="">
                                True enough, but that’s not all that it takes to get things back on track out there for a text.
                            </p>

                            <a href="#" className="inline-flex p-2 capitalize transition-colors duration-300 transform rounded-full rtl:-scale-x-100  hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
};

export default WhyChoseUs;