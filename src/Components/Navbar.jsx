import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto py-3 flex items-center justify-between border-b-[1px] border-zinc-800">
      <div className="navleft flex items-center">
        <img
          className="cursor-pointer"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />
        <div className="links flex gap-14  items-center text-white ml-[100px]">
          {["Home", "Work", "About", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-5 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className=" text-xs flex items-center gap-1 cursor-pointer"
                href="#"
              >
                {index === 0 && (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className=" inline-block h-1 w-1 bg-green-500 rounded-full "
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
