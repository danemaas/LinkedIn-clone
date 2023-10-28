import React from "react";

const ClickableIcons = ({ name, icon }) => {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer bg-transparent p-[.6rem]
            hover:bg-black/10 rounded-md mt-1`}
    >
      {icon}
      <p className="capitalize text-sm text-gray-500 font-medium">{name}</p>
    </div>
  );
};

export default ClickableIcons;
