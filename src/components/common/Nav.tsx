import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'


// icons
import { BsSearch } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiMenu5Fill } from "react-icons/ri";

import Container from './Container';

export default function Nav() {

  const [isnav , setIsNav] = useState  (false)
  const navRef = useRef<HTMLDivElement | null>(null)
  

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsNav(false);
      } 
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  return (
<Container>
    <div className='flex items-center justify-between px-1 md:px-2 lg:px-5 xl:py-7 lg:py-5 md:py-3 py-2 relative  ' >
        
        {/* logo */}
        <Link to={`/`} className=' font-inter font-bold xl:text-xl lg:text-[18px] md:text-base text-sm text-black   '>HotCoffee</Link>

        {/* search/nav/social */}
        <div className="flex items-center md:gap-7.5 gap-2">

          

          {/* search */}
          <div className="flex gap-2 border border-gray-100 rounded-[30px] px-2 w-[200px] md:min-w-[500px]  ">
            <button type="button"><BsSearch/></button>
            <input type="text" className='outline-0 py-1 text-xs md:text-sm lg:text-base ' placeholder='Search articles...' />
          </div>


          {/* navs */}
          <div className="md:flex hidden md:items-center items-start gap-7.5 absolute top-0 right-0 md:sticky bg-white h-screen md:h-auto w-1/2 md:w-auto p-2 md:p-0  "> 
              <Link to={`/`} className=' font-inter  text-base text-black mr-2 '>Home</Link>
              <Link to={`/`} className=' font-inter  text-base text-black mr-2 '>About</Link> 
              <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiInstagramFill/></Link>
              <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiTwitterXFill/></Link>
              <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiLinkedinFill/></Link> 
          </div>

          <button onClick={()=> setIsNav(true)} type="button" className='text-xl md:hidden '><RiMenu5Fill /></button>

          {/* navs */}
          {isnav &&
          <div ref={navRef} className="md:hidden  gap-7.5 fixed top-0 right-0   bg-white h-screen  w-1/2 p-2   ">
            <div className="flex flex-col ">
              <Link to={`/`} className=' font-inter  text-base text-black mr-2 '>Home</Link>
              <Link to={`/`} className=' font-inter  text-base text-black mr-2 '>About</Link>
            </div>
            
            <div className="flex gap-7.5 mt-5  ">
              <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiInstagramFill/></Link>
              <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiTwitterXFill/></Link>
              <Link to={`/`} className=' font-inter  text-xl text-[#454444] mr-2 '><RiLinkedinFill/></Link>
            </div>
          </div>}

        </div>
    </div></Container>
  )
}