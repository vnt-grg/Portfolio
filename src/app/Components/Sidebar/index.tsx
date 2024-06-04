'use client';
import { useEffect, useState } from "react";
import Image from "next/image"
import Detail from "./Detail"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [showContact, setShowContact] = useState(true);
  useEffect(() => {
    const width=window.innerWidth;
    if(width<768)
      setShowContact(false);
  }, []);

  return (
    <div className="md:pb-[6vh] pb-[2vh]">
      <div onClick={()=>setShowContact(!showContact)} className="relative top-0 ml-[94%] md:hidden text-[#F3D16C] right-0 mt-2 mr-2 cursor-pointer">
        <FaChevronDown size={13} />
      </div>
      <div className="md:block flex w-[80%] justify-between md:w-full mx-auto">
        <div className="bg-[#383839] w-[30%] md:w-[65%] rounded-[10px] md:rounded-[35px] mx-auto md:mt-[7vh]">
          <Image src="/profile.jpg" alt="Utkarsh Ahuja" width={200} height={200} />
        </div>
        <div className="w-[80%] md:w-full ">
          <div className="mx-auto w-[90%] rounded-lg tracking-wide py-[0.15rem] md:mt-[3vh]">
            <p className="text-center text-[1.2rem] md:text-[1.5rem] font-[600] text-[#FAFAFA]">Vineet Garg</p>
          </div>
          <div className="bg-[#383839] mx-auto md:w-[65%] w-[55%] rounded-lg tracking-wide py-[0.15rem] mt-[1vh] md:mt-[2vh]">
            <p className="text-center text-[0.55rem] md:text-[0.75rem] font-[300] text-[#FAFAFA]">Software Developer</p>
          </div>
        </div>
      </div>
      <hr className="bg-[#383838] h-[0.01rem] w-[70%] mx-auto mt-[1vh] md:mt-[3vh] border-0"></hr>
      <div className="w-[70%] flex justify-between mx-auto mt-[2vh] md:mt-[6vh] text-[#D6D6D6]">
        <a href="https://www.linkedin.com/in/vineetgarg1203" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={20} /></a>
        <a href="https://github.com/vnt-grg" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
        <a href="https://leetcode.com/vnt_grg" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode size={20} /></a>
        <a href="https://twitter.com/vnt_grg" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={20} /></a>
        </div>
      {
        showContact && <div>
          <Detail type="EMAIL" />
          <Detail type="LOCATION" />
        </div>
      }
    </div>
  )
}

export default Sidebar