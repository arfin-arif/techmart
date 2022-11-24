import React from 'react';
import { FaShippingFast } from 'react-icons/fa';

const WhyChoseUs = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl'>There are some redeeming factors</p>
                <h1 className='text-4xl'>We Provide High Quality Goods</h1>
                <p className='text-xl '>A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                <div className='text-center'>
                    <FaShippingFast className='text-5xl' />
                    <h1 className="text-4xl">Fast Delivery</h1>
                    <p className="text xl">Chances are there wasn’t collaboration and checkpoints, there wasn’t a process.</p>
                </div>
                <div>
                    <h1 className="text-4xl">Best Quality</h1>
                    <p className="text xl">It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum.
                    </p>
                </div>
                <div>
                    <h1 className="text-4xl">Free Return</h1>
                    <p className="text xl">True enough, but that’s not all that it takes to get things back on track out there for a text.</p>
                </div>


            </div>
        </div>
    );
};

export default WhyChoseUs;