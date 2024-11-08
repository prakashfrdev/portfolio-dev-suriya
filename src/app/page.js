import Image from "next/image";
import { BackgroundBeamsDemo } from "@/pages/main/route";
import Navbar from "@/component/Navbar/route"
import Skills from "@/pages/skills/route"
import Experience from "@/pages/experience/route"
import Projects from "@/pages/projects/route"
import Contact from "@/pages/contact/route"
export default function Home() {
  return (
    <>
    <div className="">
        <Navbar/>
        <div id="main">
        <BackgroundBeamsDemo/>
        </div>
        <div id="skill">
        <Skills/>
        </div>
        <div id="exp">
         <Experience />
         </div>
         <div id="project">
         <Projects />
         </div>
         <div id="contact">
         <Contact />
         </div>
    </div>
    </>
  );
}
