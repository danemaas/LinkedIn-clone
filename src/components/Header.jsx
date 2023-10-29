import { navMenus } from "../utils/dataIndex";
import { SearchDropdownOverlay } from "./SearchDropdownOverlay";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState("home");
  const [searchState, setSearchState] = useState(false);
  const { user } = useAuthContext();

  return (
    <>
      <header className="w-full bg-white z-[100] shadow-sm fixed">
        <div
          className="max-w-[1200px] mx-auto px-[2rem] xl:px-0 py-[.5rem]
          flex justify-between items-center"
        >
          <div
            className={`w-full flex items-center gap-1 md:gap-[1rem] ${
              searchState ? "flex-1" : "flex-[.2] md:flex-[.4]"
            }`}
          >
            <img src={logoUrl} className="w-[40px]" />
            {!searchState ? (
              <AiOutlineSearch
                onClick={() => setSearchState(!searchState)}
                className="w-[25px] h-[25px] block md:hidden translate-x-1 cursor-pointer"
              />
            ) : (
              <form
                className={`bg-[#edf3f8] py-[3px] w-[50%] rounded-md md:flex justify-between
              gap-1 border-2 border-transparent focus-within:w-[80%] focus-within:border-2
              focus-within:border-black duration-500 relative ${
                searchState ? "flex w-full focus-within:w-full" : "hidden"
              }`}
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
                  onBlur={() => (
                    setDropdown(!dropdown), setSearchState(!searchState)
                  )}
                />
                <SearchDropdownOverlay dropdown={dropdown} />
              </form>
            )}
            <form
              className={`bg-[#edf3f8] py-[3px] w-[50%] rounded-md hidden md:flex justify-between
              gap-1 border-2 border-transparent focus-within:w-[80%] focus-within:border-2
              focus-within:border-black duration-500 relative`}
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
              <SearchDropdownOverlay dropdown={dropdown} />
            </form>
          </div>
          {!searchState && (
            <nav className="w-full flex-[.8] md:flex-[.6] flex items-center">
              {navMenus.map((menu, index) => (
                <button
                  key={index}
                  onClick={() => setActive(menu.item)}
                  className={`flex-1 w-max mx-1 md:mx-2 pb-1 cursor-pointer flex flex-col
                justify-center items-center hover:text-[#389FDD]
                 ${
                   active === menu.item
                     ? "text-[#389FDD] border-[#389FDD] border-b-2 duration-300"
                     : "text-black/50 border-transparent border-b-2 duration-300"
                 }`}
                >
                  <span className="text-[1.5rem]">{menu.icon}</span>
                  <p className="hidden md:block capitalize text-xs">
                    {menu.item}
                  </p>
                </button>
              ))}
              <button
                onClick={() => setActive(menu.item)}
                className={`flex-1 w-max mx-2 pb-1 cursor-pointer flex flex-col
                justify-center items-center hover:text-[#389FDD]`}
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
