'use client'
import { useState } from "react";
import "./style.css"
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
// import Contact from "./Contact";


const Main = () => {
  const [selectedCard, setSelectedCard] = useState("Projects");

  return (
    <div>
      <div className='flex justify-between'>
        <p className='md:pl-[3%] pl-[5%] text-[#FAFAFA] mt-[1vh] md:mt-[5vh] text-[1.3rem] md:text-[2rem] font-[600] tracking-wider'>
          {selectedCard}
        </p>
        <div className={`z-[100] sidecard flex md:w-[57%] justify-between p-4 md:p-6 bg-[#282829] rounded-ss-2xl md:rounded-ss-none rounded-se-2xl border-[#303030] border-[1px] rounded-es-2xl tracking-wider font-[500]`}>
          <p onClick={() => setSelectedCard("Skills")} className={`${selectedCard === "Skills" ? "text-[#FFDB70]" : "text-[#D6D6D6] hover:text-[#A2A2A2]"} cursor-pointer`}>Skills</p>
          <p onClick={() => setSelectedCard("Experience")} className={`${selectedCard === "Experience" ? "text-[#FFDB70]" : "text-[#D6D6D6] hover:text-[#A2A2A2]"} cursor-pointer`}>Experience</p>
          <p onClick={() => setSelectedCard("Projects")} className={`${selectedCard === "Projects" ? "text-[#FFDB70]" : "text-[#D6D6D6] hover:text-[#A2A2A2]"} cursor-pointer`}>Projects</p>
          <p onClick={() => setSelectedCard("Contact")} className={`${selectedCard === "Contact" ? "text-[#FFDB70]" : "text-[#D6D6D6] hover:text-[#A2A2A2]"} cursor-pointer`}>Contact</p>
          {/* <p onClick={() => setSelectedCard("Blogs")} className={`${selectedCard === "Blogs" ? "text-[#FFDB70]" : "text-[#D6D6D6] hover:text-[#A2A2A2]"} cursor-pointer`}>Blogs</p> */}
        </div>
      </div>
      <hr className="bg-[#FFDB70] rounded-lg h-[0.3rem] ml-[5%] md:ml-[3%] w-[7%] mt-[0.3vh] md:mt-[1.7vh] border-0"/>
      {selectedCard === "Skills" && <Skills />}
      {selectedCard === "Experience" && <Experience />}
      {selectedCard === "Projects" && <Projects />}
      {/* {selectedCard === "Contact" && <Contact />} */}
    </div>
  );
};

export default Main;
