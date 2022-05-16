import React from 'react';
import Lottie from 'react-lottie';
import HeroAnim from '../../../Assets/Lottie/HeroAnim.json'

const Banner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: HeroAnim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
     <div className='relative top-24 flex'>
         <div className='flex flex-col align-middle justify-center bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 gap-2'>
             <h1 className='text-3xl px-5'>
                 Inventory Optimizetion
             </h1>
             <p className='block px-5'>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi officia vitae dicta mollitia, reiciendis expedita nostrum. Tempora, reiciendis. Sequi.
             </p>
             <button className=' w-1/5 bg-slate-600 rounded p-2 text-white cursor-pointer'>More detail</button>
             </div>
         <div className=' bg- w-1/2'>
         <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
         </div>
     </div>
    );
};

export default Banner;