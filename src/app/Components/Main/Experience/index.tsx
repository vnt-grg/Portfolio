import { IoIosFolderOpen } from "react-icons/io";
import "./style.css"
import { IoMdCode } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div className="p-8">
        <div className="w-[80%] md:w-[28%] md:ml-[72%]">
          <a href="/VINEET GARG.pdf" download>
            <div className="flex text-[#FFDB70] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-3 px-5 rounded-lg bg-gradient-to-r from-[#FFDB70]/30 to-[#202022]">
              <IoIosFolderOpen size={20} />
              <p className="pl-2">Download Resume</p>
            </div>
          </a>
        </div>
        <section className="timeline mt-5 md:mt-0">

          <div className="title-wrapper">
            <div>
              <IoMdCode className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" size={50} />
            </div>

            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">Experience</h3>
          </div>

          <ol className="timeline-list">

            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Backend Intern</h4>
              <span>EL-FI Homes</span>
              <div className="timeline-text">
                Aug&apos;23 - Oct&apos;23
              </div>
              <br />
              <div className="timeline-text">
                <ul>
                  <li>Integrated Google Solar API to calculate user-specific solar panel savings estimates, significantly boosting user engagement by providing personalized and actionable information.</li>
                  <li>Developed a secure admin panel within a Next.js and TypeScript application for creating and managing blogs, implementing JWT authentication for data protection.</li>
                  <li>Developed efficient REST APIs, optimizing data communication between frontend and backend systems.</li>
                  <li>Successfully deployed the application on AWS using NGINX for high-performance delivery.</li>
                  <li>Managed DNS configuration, ensuring seamless and reliable access to the deployed project.</li>
                </ul>
              </div>
            </li> */}

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Developer Intern</h4>
              <span>Unified Mentor</span>
              <div className="timeline-text">
                June&apos;24 - July&apos;24
              </div>
              <br />
              <div className="timeline-text">
                <ul>
                  <li>Designed and developed efficient RESTful APIs to implement secure user authentication and authorization with JWT.</li>
                  <li>Developed admin panel for seamless alumni profile, events, and news management.</li>
                  <li>Integrated real-time content posting and dynamic alumni profile display for user engagement.</li>
                  <li>Developed a responsive UI using React, ensuring optimal cross-device user experience.</li>
                  <li>Utilized Express.js and MongoDB for efficient data handling, while deploying on AWS EC2 with NGINX and Cloudinary for image storage.</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>
        <div>
          <p className="text-[#FAFAFA] font-[600] tracking-wide text-[1.5rem]">Achievements</p>
          <div className="w-[90%] text-[#FAFAFA] bg-[#232325] mx-auto my-[1vh] md:my-[2vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
            <p className="mb-1">Top 3 in  2021-25 CSE-A</p>
            <p className="mb-1">Secured Scholarship worth 4.5 lakhs during graduation</p>
            <p>Won gold medal in kabbadi in class 10th </p>
          </div>
        </div>
        <section className="timeline">

          <div className="title-wrapper">
            <div>
              <FaBookReader className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" size={40} />
            </div>

            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Amity University Haryana</h4>

              <span>2021 — 2025</span>

              <p className="timeline-text">
                B.Tech-Computer Science Engineering
              </p>
              <p className="timeline-text">
                CGPA: 9.02
              </p>

            </li>
            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Spring Daisy Convent School </h4>

              <span>2019</span>

              <p className="timeline-text">
                Class 10th - 91.8%
              </p>
              <p className="timeline-text">
               
              </p>
              <span>2021</span>

              <p className="timeline-text">
                Class 12th - 93.4%
              </p>
              <p className="timeline-text">
                
              </p>

            </li>

          </ol>
        </section>
      </div>
    </div>
  )
}

export default Experience