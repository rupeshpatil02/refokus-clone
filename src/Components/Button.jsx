import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="text-black md:min-w-32 w-36 px-3 py-2 bg-zinc-100 rounded-full flex justify-between items-center cursor-pointer">
      <span className="text-xs">{title}</span>
      <IoIosReturnRight className="mr-1" />
    </div>
  );
}

export default Button;
