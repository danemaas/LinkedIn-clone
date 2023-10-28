import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function SideWidgets() {
  const recommendations = (name, description) => (
    <div className="flex gap-3 mb-[1rem]">
      <img
        src="https://i.pravatar.cc/50"
        alt=""
        className="rounded-full h-[50px]"
      />
      <div className="flex flex-col gap-2">
        <div>
          <p className="capitalize font-medium">{name}</p>
          <p className="text-[13px] text-black/60">{description}</p>
        </div>
        <button
          className="w-max border-2 border-black/30 px-3 rounded-full capitalize flex items-center gap-2
          py-[3px] font-medium hover:bg-black/10 hover:border-black duration-300"
        >
          <AiOutlinePlus /> <span>follow</span>
        </button>
      </div>
    </div>
  );

  return (
    <aside className="flex-[.3] translate-y-[5rem] w-full">
      <div
        className="flex flex-col border-[1px] border-stone-400/20 rounded-[10px]
        bg-white mb-[1rem] p-[1rem]"
      >
        <div className="flex justify-between items-center mb-[1rem]">
          <h2 className="capitalize font-medium text-sm">add to your feed</h2>
          <BsFillInfoSquareFill className="cursor-pointer rounded-md" />
        </div>
        {recommendations("john dela cruz", "senior web developer")}
        {recommendations("abby brown", "full stack developer")}
        {recommendations("mary chu", "we are hiring now | hr manager")}
        {recommendations("david backham", "senior software engineer")}
        <button className="capitalize bg-black/10 rounded-md hover:font-medium">
          view all recommendations
        </button>
      </div>
    </aside>
  );
}

export default SideWidgets;
