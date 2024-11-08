
"use client"
import Image from 'next/image';
import HtmlLogo from "@/assets/html-5.png"
import CssLogo from "@/assets/css-3.png"
import TailwindLogo from "@/assets/tailwindLogo.png"
import javascriptLogo from "@/assets/javascriptlogo.png"
import jqueryLogo from "@/assets/jquery logo.png"
import ReactLogo from "@/assets/reactlogo.png"
import NextLogo from "@/assets/nextlogo.png"
import AntLogo from "@/assets/antdesign.png"
import FirebaseLogo from "@/assets/firebaselogo.png"
import React from 'react'
import Marquee from "react-fast-marquee";

const route = () => {
  return (
    <div className=' w-[100%] bg-neutral-950 h-[350px] flex-col gap-[20px] flex items-center justify-center gap-[40px] sm:gap-[0px] sm:justify-around'>
        <div className="">
            <p className='text-[26px] lg:text-[32px] text-[#ffffff] font-[500]'>Technical Skills</p>
        </div>
        <div className="w-[100%] sm:w-[90%] lg:w-[70%] flex gap-[10px]">
        <Marquee speed={70} autoFill={true} pauseOnHover={true}>
        
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px]   px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={HtmlLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>HTML</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px] px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={CssLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>CSS</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px] px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={TailwindLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>Tailwind</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px] px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={javascriptLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>JavaScript</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px] px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={jqueryLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>Jquery</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px] px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={ReactLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>React JS</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px]  px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={NextLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[20px] font-[500]  text-[#ffffff]'>Next JS</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px]  px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={AntLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[18px] font-[500]  text-[#ffffff]'>Ant Design</p>
        </div>
        <div className="flex w-[159px] border border border-white/[0.2] mx-[25px]  px-8 py-4 shadow-input dark:border-white/[0.2] justify-center h-[148px] rounded-[10px] flex-col gap-[10px] items-center" style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <Image src={FirebaseLogo} alt='' className='w-[70px] h-[70px]'/>
        <p className='text-[18px] font-[500]  text-[#ffffff]'>Firebase</p>
        </div>
    
        </Marquee>
        </div>

    </div>
  )
}

export default route