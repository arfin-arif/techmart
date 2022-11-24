import React from 'react';
import { RotatingLines } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className="flex justify-center items-center mt-20">

            <RotatingLines
                strokeColor="#19D3AE"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default Loading;