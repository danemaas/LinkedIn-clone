import React from "react";

export const SearchDropdownOverlay = ({ dropdown }) => {
  if (!dropdown) return;

  return (
    <div className="w-full h-full relative">
      <div className="w-full min-h-[100vh] bg-black/70 fixed top-0 left-0 z-10 overflow-hidden" />
      <section
        className={`bg-white w-[500px] h-[300px] text-black
        fixed left-[23.5rem] z-[100] rounded-md shadow-md
        shadow-slate-600 ${
          dropdown
            ? "translate-y-[3.5rem] origin-top duration-500"
            : "translate-y-0 origin-bottom duration-500"
        }`}
      >
        <div className="w-full flex justify-between p-3">
          <p className="capitalize font-medium">recent</p>
          <button
            className="capitalize font-medium text-black/50
           hover:bg-slate-500/10 p-1 rounded-md"
          >
            clear
          </button>
        </div>
      </section>
    </div>
  );
};
