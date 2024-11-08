"use client"
import React from 'react'
import Link from 'next/link'
const route = () => {
  return (
  <div class="fixed inset-x-0 max-w-[500px] top-[20px] mx-auto z-50 top-2">
    <nav class="boder relative bg-neutral-950 flex items-center justify-center space-x-4 rounded-full border border-white/[0.2]  px-8 py-3 shadow-input dark:border-white/[0.2] dark:bg-black " style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
    <div class="relative flex gap-[20px] md:gap-[30px] ">
        <Link href="#skill" class="cursor-pointer md:text-[18px] hover:opacity-[0.9] text-white">Skills</Link>
        <Link href="#exp" class="cursor-pointer md:text-[18px] hover:opacity-[0.9] text-white">Experience</Link>
        <Link href="#project" p class="cursor-pointer md:text-[18px] hover:opacity-[0.9] text-white">Projects</Link>
        <Link href="#contact" class="cursor-pointer md:text-[18px] hover:opacity-[0.9] text-white">Contact</Link>
    </div>
    </nav>
    </div>
  )
}

export default route