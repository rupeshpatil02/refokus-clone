import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "17px",
      }}
      className={` bg-zinc-800 p-4 rounded-2xl text-white  ${width}  min-h-[18rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          {start ? (
            <h3 className="text-xs">Get in touch</h3>
          ) : (
            <h3 className="text-xs">Up Next: News</h3>
          )}
          <span className="text-xs">
            <FaArrowRightLong />
          </span>
        </div>
        {start ? (
          <h1 className="text-xl font-medium mt-4">
            Let's get to it,
            <br />
            together.
          </h1>
        ) : (
          <h1 className="text-xl font-medium mt-4">
            Insights and behind <br /> the scenes
          </h1>
        )}
      </div>
      <div className="down w-full mt-16">
        {start === true && (
          <>
            <h1 className="text-7xl font-medium  leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border border-zinc-50 mt-5 font-medium">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-xs text-zinc-400 tracking-tight">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
