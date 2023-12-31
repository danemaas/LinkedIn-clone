import { MdAccountCircle } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const recentItems = (topic) => (
    <div
      className="flex gap-1 items-center text-sm text-black/50 font-bold cursor-pointer
      hover:bg-gray-400/30 rounded-md p-[.3rem]"
    >
      <span>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <aside className="translate-y-[5rem] md:flex-[.6] lg:flex-[.2] xl:flex-[.2] rounded-[10px] text-center h-max">
      <div
        className="flex flex-col items-center border-[1px] border-stone-400/20 rounded-[10px]
        bg-white mb-[1rem]"
      >
        <div className="relative w-full rounded-t-[10px] overflow-hidden mb-[1rem]">
          <div className="w-full h-[70px] absolute bg-gradient-to-tr from-slate-50 to-cyan-500/50" />
          {user ? (
            <img
              src={user?.photoURL}
              alt=""
              className="rounded-full w-[70px] h-[70px] mx-auto translate-y-[1.8rem] mb-[2.5rem]"
            />
          ) : (
            <div className="translate-x-[5.2rem] translate-y-[1.7rem] pb-[2rem]">
              <MdAccountCircle size={70} />
            </div>
          )}
          <h2 className="font-medium text-[1.1rem]">{user?.displayName}</h2>
          <p className="text-sm text-black/70">
            freelance front-end web developer
          </p>
        </div>
        <hr className="border-[1px] border-black/10 w-full mb-[1rem]" />
        <div className="w-full px-[1rem] mb-[1rem]">
          <div className="w-full flex items-center justify-between cursor-pointer">
            <p className="text-black/50 text-sm font-medium">Who viewed you</p>
            <p className="text-[#389FDD] text-sm font-medium">189</p>
          </div>
          <div className="w-full flex items-center justify-between cursor-pointer">
            <p className="text-black/50 text-sm font-medium">Views on post</p>
            <p className="text-[#389FDD] text-sm font-medium">233</p>
          </div>
        </div>
        <hr className="border-[1px] border-black/10 w-full mb-[1rem]" />
        <div className="mb-[1rem]">
          <p className="text-[#389FDD] text-sm font-medium capitalize">
            my items
          </p>
        </div>
      </div>

      <div
        className="hidden md:flex flex-col border-[1px] border-stone-400/20 rounded-[10px]
        bg-white p-[1rem]"
      >
        <h2 className="text-base capitalize font-medium text-start mb-2">
          recent
        </h2>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("front-end development")}
        {recentItems("javascript")}
        {recentItems("git")}
      </div>
    </aside>
  );
};

export default Sidebar;
