import React from 'react';
import Lottie from "react-lottie";
import boterror404 from '../../../Assets/Lottie/boterror404.json';

const PageNotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: boterror404,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return (
        <div className=''>
            <div className=' w-2/4 px-5 py-24 mx-auto '> 
            <h1 className='text-5xl text-center'>Page Not Found</h1>             
            <Lottie options={defaultOptions}></Lottie>
            </div>
        </div>
    );
};

export default PageNotFound;