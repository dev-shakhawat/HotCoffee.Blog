import * as React from "react";
import { Link } from "react-router";

interface blogtopProps {
  title?: string;
  description?: string;
  date?: string;
  readMoreText?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string; 
}

function BlogCart({
  title = "long established",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
  date = "May 20th 2020",
  readMoreText = "Read more",
  imageUrl = "https://api.builder.io/api/v1/image/assets/TEMP/9dc99492096516644bf10f72c370e946cc3c9817?placeholderIfAbsent=true&apiKey=1371f4a3ee414af8a81151fca7f7e2a3",
  imageAlt = "Card image",
  className="", 
}: blogtopProps) {
  return ( 
        <div className={`flex ${className} items-center md:gap-5      `}>
            <div className={` p-2 sm:p-4 md:p-6 lg:p-8 xl-p10    `}>
              <div className="self-start lg:text-[30px] md:text-[24px] sm:text-xl text-base font-bold font-inter  text-[#2D3748]">
                {title}
              </div>
              <div className="md:mt-7 mt-4 text-sm font-inter font-normal text-slate-500">{description}</div>
              <div className="flex gap-5 justify-between mt-8 text-xs">
                <div className="text-slate-500 font-inter font-normal">{date}</div>
                <Link to={`#`} className="font-bold font-inter  text-gray-700">{readMoreText}</Link>
              </div>
            </div> 
          <div className="    ">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="object-contain w-full "
            />
          </div>
        </div>  
  );
}

export default BlogCart;
