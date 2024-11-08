
"use client"
import React from 'react'

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const route = () => {
    const words = `I have completed 6 month Frontend Developer Intern in Inetz Technologies Proficient in HTML, CSS, JavaScript and
React JS and responsive design Enthusiastic learner eager to contribute to web development projects and gain
hands-on experience in a collaborative environment.
`;
  return (
    <div className='bg-neutral-950 flex w-[100%] justify-center gap-[10px] py-[20px] flex-col items-center '>
        <p className='text-[26px] lg:text-[32px] text-[#ffffff] font-[500]'>Experience</p>
        <div className=" lg:w-[70%] flex flex-col items-start  gap-[10px] w-[90%]">
        <p className='text-[26px] lg:text-[32px] text-blue-500 font-[500]'>Internship</p>
       <TextGenerateEffect words={words} className='ml-[10px]' />
       </div>
    </div>
  )
}

export default route