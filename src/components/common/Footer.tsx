import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <Container>
      <div className="flex items-center justify-between  py-7  ">
        <div className="flex md:items-center flex-col md:flex-row gap-2 ">
          <Link
            to={`/`}
            className=" font-inter font-bold lg:text-xl md:text-base text-sm text-black   "
          >
            HotCoffee
          </Link>
          <p className=" font-inter text-base   ">
            2020 copyright all rights reserved
          </p>
        </div>

        {/* navs */}
        <div className="flex items-center 2xl:gap-7.5 xl:gap-7 lg:gap-5 md:gap-3 gap-2  ">
          <Link to={`/`} className=" font-inter  text-xl text-[#454444] mr-2 ">
            <RiInstagramFill />
          </Link>
          <Link to={`/`} className=" font-inter  text-xl text-[#454444] mr-2 ">
            <RiTwitterXFill />
          </Link>
          <Link to={`/`} className=" font-inter  text-xl text-[#454444] mr-2 ">
            <RiLinkedinFill />
          </Link>
        </div>
      </div>
    </Container>
  );
}
