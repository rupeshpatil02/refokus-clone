import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full h-[23rem] py-20 text-white ">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-lg px-8 mx-auto flex items-center justify-between"
      >
        <h1 className="text-4xl capitalize font-medium">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-5 text-xs leading-5 tracking-wider pr-10 mr-10">
            {val.description}
          </p>
          <div className="flex gap-10 items-center">
            {val.website && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
