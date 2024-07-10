import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="text-black md:min-w-32 w-32 px-3 py-3 bg-zinc-100 rounded-full flex justify-between items-center">
      <span className="text-xs">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
