import { navMenus } from "../utils/dataIndex";
import { SearchDropdownOverlay } from "./SearchDropdownOverlay";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <>
      <header className="w-full bg-white z-[100] shadow-sm fixed">
        <div
          className="max-w-[1200px] mx-auto px-[2rem] xl:px-0 py-[.5rem]
          flex justify-between items-center"
        >
          <div className="w-full flex items-center gap-[1rem]">
            <img src={logoUrl} className="w-[40px]" />
            <form
              className="bg-[#edf3f8] py-[3px] w-[50%] rounded-md flex justify-between
              gap-1 border-2 border-transparent focus-within:w-[80%] focus-within:border-2
              focus-within:border-black duration-500"
            >
              <AiOutlineSearch
                size={30}
                className="translate-x-1 cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent ps-2 outline-none w-full"
                onFocus={() => setDropdown(!dropdown)}
                onBlur={() => setDropdown(!dropdown)}
              />
            </form>
          </div>
          <nav className="w-full flex items-center">
            {navMenus.map((menu, index) => (
              <button
                key={index}
                onClick={() => setActive(menu.item)}
                className={`flex-1 w-max mx-2 pb-1 cursor-pointer flex flex-col
                justify-center items-center hover:text-black border-b-[3px]
                border-transparent ${
                  active === menu.item
                    ? "text-black border-black duration-300"
                    : "text-black/50"
                }`}
              >
                <span className="text-[1.5rem]">{menu.icon}</span>
                <p className="capitalize text-xs">{menu.item}</p>
              </button>
            ))}
          </nav>
        </div>
      </header>
      <SearchDropdownOverlay dropdown={dropdown} />
    </>
  );
}

export default Header;
