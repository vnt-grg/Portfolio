import Sidebar from "@/app/Components/Sidebar";
import Main from "@/app/Components/Main";

const LandingPage = () => {
  return (
    <div>
      <div className="w-[86%] md:flex mx-auto justify-between my-[1.5rem] md:my-[1.5rem]">
        <div className="md:w-[20%] bg-[#1E1E1F] h-[100%] rounded-2xl border-[#303030] border-[1px]"><Sidebar/></div>
        <div className="md:w-[76%] mt-4 md:mt-0 bg-[#1E1E1F] rounded-2xl border-[#303030] border-[1px]"><Main/></div>
      </div>
    </div>
  )
}

export default LandingPage