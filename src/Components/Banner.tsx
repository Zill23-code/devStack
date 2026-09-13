import React from 'react';
import Image from '../B14-A05-DevStack/assets/banner-stack.png'

const Banner = () => {
    return (
       <section className='mt-20'>
         <div className=' container mx-auto flex justify-between gap-4'>
            <div>
<h2 className='font-extrabold text-6xl'>Build Your Ideal</h2>
<h2 className="text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">Development Stack</h2>
<p className='text-gray-500'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
<div className="flex items-center gap-4 pt-2">
  <button className="h-[39px] px-5 rounded-lg text-white font-medium text-xs bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] hover:opacity-95 transition-opacity">
    Explore Technologies
  </button>
  
  <button className="h-[39px] px-5 rounded-lg border border-gray-200 text-gray-600 font-medium text-xs hover:bg-gray-50 transition-colors">
    Learn More
  </button>
</div>
            </div>
            <div>
<img src={Image} alt="" />
            </div>
        </div>
       </section>
    );
};

export default Banner;