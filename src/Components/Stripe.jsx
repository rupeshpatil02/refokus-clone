import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[20%] px-5 py-4 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700 flex justify-between items-center text-white mt-12">
      <img className="w-24 h-6" src={val.url} alt="" />
      <span className="font-medium">{val.number}</span>
    </div>
  );
}

export default Stripe;
