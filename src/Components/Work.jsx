import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "38%",
      left: "39%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "45%",
      left: "37%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "30%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "48%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "39%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "36%",
      left: "39%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 120)) {
      case 0:
        imagesShow([]);

        break;
      case 1:
        imagesShow([1]);
        break;
      case 2:
        imagesShow([1, 2]);
        break;
      case 3:
        imagesShow([1, 2, 3]);
        break;
      case 4:
        imagesShow([1, 2, 3, 4]);
        break;
      case 5:
        imagesShow([1, 2, 3, 4, 5]);
        break;
      case 6:
        imagesShow([1, 2, 3, 4, 5, 6]);
        break;
    }
  });

  return (
    <div className="w-full relative">
      <div className="max-w-screen-xl mx-auto text-white leading-tight">
        <h1 className="text-[38vw] text-center font-medium">work</h1>
      </div>
      <div className="absolute w-full h-full top-0">
        {images.map(
          (item, idx) =>
            item.isActive && (
              <img
                key={idx}
                className="
          w-52 absolute rounded-xl"
                style={{ top: item.top, left: item.left }}
                src={item.url}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;
