import { MdAccountCircle, MdMoreHoriz } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Chatbox = () => {
  const [active, setActive] = useState(false);

  return (
    <section
      className={`fixed bottom-0 right-0 w-[300px] bg-white p-2
      rounded-t-md ${
        active
          ? "h-[70%] origin-bottom duration-300"
          : "h-[50px] origin-top duration-300"
      }`}
    >
      <header onClick={() => setActive(!active)} className="cursor-pointer">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="text-[2rem]">
              <MdAccountCircle />
            </div>
            <h1 className="capitalize font-medium text-[.9rem]">messanging</h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="text-[1.5rem] text-gray-500 font-bold rounded-full p-[5px]
              hover:bg-black/10 duration-300"
            >
              <MdMoreHoriz />
            </div>
            <div
              className="text-[1.2rem] text-gray-500 font-bold rounded-full p-[8px]
              hover:bg-black/10 duration-300"
            >
              <IoCreateOutline />
            </div>
            <div
              className="text-[1.5rem] text-gray-500 font-bold rounded-full p-[5px]
              hover:bg-black/10 duration-300"
            >
              {active ? <BiChevronDown /> : <BiChevronUp />}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Chatbox;
