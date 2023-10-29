import { MdAccountCircle, MdMoreHoriz } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const Chatbox = () => {
  const [active, setActive] = useState(false);
  const { user } = useAuthContext();

  return (
    <section
      className={`hidden md:block fixed bottom-0 right-2 w-[300px] bg-white p-2
      rounded-t-md shadow-md shadow-black/50 ${
        active
          ? "h-[70%] origin-bottom duration-300"
          : "h-[50px] origin-top duration-300"
      }`}
    >
      <header
        onClick={() => setActive(!active)}
        className="relative cursor-pointer z-0"
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative w-max h-max">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-[32px] h-[32px] rounded-full"
                />
                <div
                  className="absolute content-none w-[10px] h-[10px] bg-green-600 rounded-full
                  bottom-0 right-0 border-[1px] border-white"
                />
              </div>
            ) : (
              <div className="text-[2rem]">
                <MdAccountCircle />
              </div>
            )}

            <h1 className="capitalize font-medium text-[.9rem]">messanging</h1>
          </div>
        </div>
      </header>
      <div className="flex items-center gap-2 absolute z-50 top-2 right-0">
        <div
          className="text-[1.5rem] text-gray-500 font-bold rounded-full p-[5px]
              hover:bg-black/10 duration-300 cursor-pointer"
        >
          <MdMoreHoriz />
        </div>
        <div
          className="text-[1.2rem] text-gray-500 font-bold rounded-full p-[8px]
              hover:bg-black/10 duration-300 cursor-pointer"
        >
          <IoCreateOutline />
        </div>
        <div
          onClick={() => setActive(!active)}
          className="text-[1.5rem] text-gray-500 font-bold rounded-full p-[5px]
              hover:bg-black/10 duration-300 cursor-pointer"
        >
          {active ? <BiChevronDown /> : <BiChevronUp />}
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
