import React from 'react';
import Poster from '../assets/Poster.jpg';

const Banner = () => {
  return (
    <div
      className="h-[60vh] md:h-[60vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${Poster})`,
      }}
    >
        <div className='text-white text-xl text-center w-full bg-blue-900/35 '>Vishal</div>
      {/* <h1 className="text-white text-center font-bold text-2xl">Banner</h1> */}
    </div>
  );
};

export default Banner;
