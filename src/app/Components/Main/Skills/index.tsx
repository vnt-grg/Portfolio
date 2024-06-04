import { TbBrandCpp } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";
// import { IoLogoDocker } from "react-icons/io5";
// import { FaAws } from "react-icons/fa";
// import { SiGitpod } from "react-icons/si";
import { PiGitMergeFill } from "react-icons/pi";

const Skills = () => {
  return (
    <div>
      <div className="w-[90%] text-[#FAFAFA] bg-[#232325] mx-auto my-[4vh] md:my-[9vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
        {/* Languages */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-start my-5">
          <div className="flex">
            <FaC size={30}/>
            <span className="ml-2 text-[1.3rem]">C</span>
          </div>
          <div className="flex">
            <TbBrandCpp size={40}/>
            <span className="ml-2 text-[1.3rem]">C++</span>
          </div>
          <div className="flex">
            <FaJava size={40}/>
            <span className="ml-2 text-[1.3rem]">Java</span>
          </div>
          <div className="flex">
            <BiLogoTypescript size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">TypeScript</span>
          </div>
          <div className="flex">
            <IoLogoJavascript size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">JavaScript</span>
          </div>
        </div>
        <hr className="bg-[#383838] h-[0.1rem] w-[70%] mx-auto mt-[1vh] md:mt-[3vh] border-0"></hr>
        {/* Frameworks */}
        <div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-start my-8">
          <div className="flex">
            <SiNextdotjs size={30}/>
            <span className="ml-2 text-[1.3rem]">Next.JS</span>
          </div>
          <div className="flex">
            <IoLogoNodejs size={40}/>
            <span className="ml-2 text-[1.3rem]">Node</span>
          </div>
          <div className="flex">
            <IoLogoReact size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">React</span>
          </div>
          <div className="flex">
            <DiMongodb size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">MongoDB</span>
          </div>
          <div className="flex mt-2">
            <SiExpress size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">Express</span>
          </div>
          <div className="flex mt-2">
            <SiTailwindcss size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">TailwindCSS</span>
          </div>
        </div>
        </div>
        <hr className="bg-[#383838] h-[0.1rem] w-[70%] mx-auto mt-[1vh] md:mt-[3vh] border-0"></hr>
        {/* Tools */}
        <div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-start my-8">
          {/* <div className="flex">
            <IoLogoDocker size={40}/>
            <span className="ml-2 text-[1.3rem]">Docker</span>
          </div> */}
          {/* <div className="flex">
            <FaAws size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">AWS</span>
          </div> */}
          <div className="flex">
            <PiGitMergeFill size={40}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">Git</span>
          </div>
          {/* <div className="flex">
            <SiGitpod size={30}/>
            <span className="ml-2 text-[1rem] md:text-[1.3rem]">Gitpod</span>
          </div> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills