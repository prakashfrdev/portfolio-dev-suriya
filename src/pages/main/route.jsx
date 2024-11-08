"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export function BackgroundBeamsDemo() {
    const words = [
        {
          text: "Frontend",
          className: "text-white text-[22px] lg:text-[24px] ",

        },
        {
            text: "h",
            className: "text-[18px] text-transparent visibile-hidden",
          },
        {
          text: "Developer...",
          className: "text-blue-500 text-[22px] dark:text-blue-500",
        },
      ];
  return (
    <div className="bg-neutral-950 relative h-[100vh] z-[23] flex flex-col items-center gap-[0px] justify-center">
        <p className="text-white text-[20px] md:text-[22px] lg:text-[24px]">Hello, I`m Suriya. As passionate</p>
         <TypewriterEffect words={words} />
         <div className="flex gap-[20px] flex-wrap justify-center mt-[30px]">
         <a href="https://drive.google.com/file/d/1fDQ4lvb6RnFHJ-F-HGNeteYDX2vu22c6/view" target="_blank" rel="noopener noreferrer" > <button className="w-40 h-10 rounded-xl bg-[#000] cursor-pointer border dark:border-white border-transparent text-white text-[17px]">
         Download CV
        </button></a>
        <button className="w-40 h-10 rounded-xl bg-white text-black border cursor-pointer border-black  text-[17px]">
         Contact
        </button>
         </div>
      <BackgroundBeams />
    </div>
  );
}
