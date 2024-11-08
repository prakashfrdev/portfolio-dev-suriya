"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import PomoPrj from "@/assets/pomo-project.jpeg"
import BillPrj from "@/assets/kooraikadai-proj.jpeg"
import StuPrj from "@/assets/student-projec.jpeg"
import GitLogo from "@/assets/githublogo.png"
import crudProject from "@/assets/crud_project.png"


const route = () => {
  return (
    <div className='bg-neutral-950 flex flex-col items-center'>
           <p className='text-[26px] lg:text-[32px] text-[#ffffff] font-[500]'>Projects</p>
           <div className="lg:w-[90%] xl:w-[70%] sm:w-[90%] w-[100%] flex flex-wrap gap-[20px] lg:gap-[60px] justify-center">
            {/* first project */}
                  <div className="">
                  <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-neutral-950 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  " style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 text-white"
        >
         Pomodoro timer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
         Integrated notification alerts to signal the end of work and break intervals. React JS for the frontend Redux for state management.Individual preferences and work patterns.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
   
   Users could set their preferred work and break intervals, allowing for flexibility based on
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={PomoPrj}
            height="250"
            width="380"
            className="w-[380px] h-[250px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-end mt-4">
          <Link href="https://github.com/prakashfrdev/pomodoro-project" target="_blank">
          <Image
          src={GitLogo}
            translateZ={20}
       
            width={70}
         
            className="px-4  rounded-xl text-xs font-normal text-white"
          />
          </Link>
          <Link href="https://pomo-project-2024.web.app/" target="_blank">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
         Website
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
                  </div>

                  {/* second Project */}
                  <div className="">
                  <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-neutral-950 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 pb-[37px] border  " style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 text-white"
        >
        Billing app
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
        Billing Website for Hotel
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
         Developed a billing website using React and Redux for efficient management of billing processes in a hotel setting.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
   
   Technologies Used: React, Redux, JavaScript, HTML5, CSS3
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={BillPrj}
            height="250"
            width="380"
            className="w-[380px] h-[250px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-end mt-4">
          <Link href="https://github.com/prakashfrdev/Koorai-kadai" target="_blank">
          <Image
          src={GitLogo}
            translateZ={20}
       
            width={70}
         
            className="px-4  rounded-xl text-xs font-normal text-white"
          />
          </Link>
          <Link href="https://kooraikadai-billingapp.web.app/" target="_blank">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
         Website
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
                  </div>

                       {/* THird Project */}
                       <div className="">
                  <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-neutral-950 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  " style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 text-white"
        >
        Student managment system
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
        Ongoing project
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
        Developed a student management system using React and Ant Design, for my institute's administrative needs.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
   
   Focused primarily on frontend development, implementing user interfaces and interactions.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={StuPrj}
            height="250"
            width="380"
            className="w-[380px] h-[250px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-end mt-4">
          <Link href="" >
          <Image
          src={GitLogo}
            translateZ={20}
       
            width={70}
         
            className="px-4  rounded-xl text-xs font-normal text-white"
          />
          </Link>
          <Link href="" >
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
         Website
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
                  </div>

                  {/* THird Project */}
                  <div className="">
                  <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-neutral-950 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  " style={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 text-white"
        >
        My CRUD Application
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
       A simple and responsive CRUD app that allows users to create, read, update, and delete data, built using Vite for fast development and Firebase for backend infrastructure
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
        Real-time updates using Firestore.Responsive UI designed for both mobile and desktop
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >

        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={crudProject}
            height="250"
            width="380"
            className="w-[380px] h-[250px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-end mt-4">
          <Link href="" >
          <Image
          src={GitLogo}
            translateZ={20}
       
            width={70}
         
            className="px-4  rounded-xl text-xs font-normal text-white"
          />
          </Link>
          <Link href="https://share-market-task.web.app/" >
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
         Website
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
                  </div>
           </div>
    </div>
  )
}

export default route