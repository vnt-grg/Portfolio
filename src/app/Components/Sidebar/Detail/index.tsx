import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

interface DetailProps {
    type: string;
}

const Detail: React.FC<DetailProps> = ({ type }) => {
    return (
        <div className="md:mt-[4vh] mt-[2vh] w-[60%] md:w-[80%] mx-auto flex justify-between">
            <div className="text-[#FDD96F] p-4 rounded-xl w-[25%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                {type === "EMAIL" ? <IoMailOutline size={20} /> : <IoLocationOutline size={20} />}
            </div>
            <div>
                <p className="text-[#8B8B8B] text-[0.8rem] font-[600]">{type}</p>
                {type === "EMAIL" ?
                    <a className="text-[#FAFAFA] text-[0.8rem]" href="mailto:garg12vineet@gmail.com">garg12vineet@gmail.com</a>
                    :
                    <p className="text-[#FAFAFA] text-[0.9rem]">Tauru, Haryana, India</p>}
            </div>
        </div>
    );
};

export default Detail;
