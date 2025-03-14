import React from 'react'
import { Link } from 'react-router-dom'
import { SlBasket, SlHeart } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import logo from "../assets/noon-logo.svg"
import flag from "../assets/flag.svg"


const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-amber-200 gap-1 px-4 py-3'>
        <img src={logo} className='max-w-20 sm:max-w-16' alt="logo" />
        <div className="flex gap-0.5">
            <img src={flag} alt="flag" />
            <div className="flex flex-col">
                <p className='text-sm' > Deliver to</p>
                <p className='text-sm font-bold flex gap-0.5'> Dubai</p>
            </div>
        </div>
        <input type="text" placeholder="What are you looking for ?" className='lg:w-[60%] md:w-[50%] xl:w-[60%] p-2 border-none  outline-0 bg-white text-gray-500 rounded-sm ' name="" id="" />
        <p>lang</p>
        <div className='font-extralight'>|</div>
        <Link className='flex items-center gap-1 '> log in <IoPersonOutline/>  </Link>
        <div className='font-extralight'>|</div>
        <div><SlBasket/></div>
        <div><SlHeart/></div>
        
    </div>
  )
}

export default Navbar
