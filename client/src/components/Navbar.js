import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
  const [show, setShow] = useState(false);

  const showFunc = () => {
    setShow(!show);
  };

  return (
    <div className='navbar h-16 md:h-12 bg-black w-full flex justify-between items-center text-white'>
      
      <div className=' text-2xl mx-2 font-bold font-mono flex'> 
       <div className='flex justify-center items-center mb-2'> <img src='/images/darklight.jpg ' className='object-cover h-[15px]'></img>  </div>  <div className='mx-2'> MERN </div> </div>
      <div className={`bg-black absolute top-[65px] md:static w-full md:w-auto `}>
        <ul className={`md:text-lg md:flex space-y-4 md:space-y-0 mx-2 text-2xl justify-center items-center md:space-x-3 font-semibold ${show ? '' : 'hidden'}`}>
     
          <li className='hover:scale-105 cursor-pointer'>
            <NavLink to='/'> Home </NavLink>  </li>
          <hr />
          <li className='hover:scale-105 cursor-pointer'> 
          <NavLink to="/about">About me</NavLink> </li>
          <hr />
          <li className='hover:scale-105 cursor-pointer'>   <NavLink to="/contact">Contact me</NavLink>  </li>
          <hr />
          <li className='hover:scale-105 cursor-pointer'>   <NavLink to="/login">Login</NavLink>   </li>
          <hr />
          <li className='hover:scale-105 cursor-pointer'>  <NavLink to="/register">Register</NavLink> </li>
          <hr />
        </ul>
      </div>
      <div onClick={showFunc} className='rounded-full font-bold text-2xl px-2 md:hidden'>
        {show ? 'CLOSE' : 'MENU'}
      </div>
    </div> 
  );
}

export default Navbar;
