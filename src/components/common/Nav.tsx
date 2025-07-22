import React from 'react'
import { Link } from 'react-router'


// icons
import { BsSearch } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import Container from './Container';

export default function Nav() {
  return (
<Container>
    <div className='flex items-center justify-between px-1 md:px-2 lg:px-5 py-7  ' >
        
        {/* logo */}
        <Link to={`/`} className=' font-inter font-bold text-xl text-black   '>HotCoffee</Link>

        {/* search/nav/social */}
        <div className="flex items-center gap-7.5">

          {/* search */}
          <div className="flex gap-2 border border-gray-100 rounded-[30px] px-2 min-w-[500px]  ">
            <button type="button"><BsSearch/></button>
            <input type="text" className='outline-0 py-1  ' placeholder='Search articles...' />
          </div>


          {/* navs */}
          <div className="flex items-center gap-7.5  ">
            <Link to={`/`} className=' font-inter  text-base text-black mr-2 '>Home</Link>
            <Link to={`/`} className=' font-inter  text-base text-black mr-2 '>About</Link>
            <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiInstagramFill/></Link>
            <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiTwitterXFill/></Link>
            <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiLinkedinFill/></Link>

          </div>

        </div>
    </div></Container>
  )
}