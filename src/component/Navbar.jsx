import React from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className="w-[90px]" src={Logo} alt="Logo" />
        <Link to='/' className='text-blue-500 text-3xl'>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-3xl'>WatchList</Link>
    </div>
  );
};

export default Navbar;
