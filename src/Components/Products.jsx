import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      website: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      website: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      website: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      website: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      website: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      website: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      website: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      website: true,
      case: true,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      website: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      website: true,
      case: false,
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      website: true,
      case: true,
    },
    {
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      website: true,
      case: true,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      website: true,
      case: true,
    },
    {
      title: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      website: true,
      case: false,
    },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing",
      website: true,
      case: false,
    },
  ];
  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-16 relative">
      {products.map((item, idx) => (
        <Product key={idx} val={item} mover={mover} count={idx} />
      ))}
      <div className="absolute w-full h-full top-0 pointer-events-none mt-5">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
          className="window absolute w-[24rem] h-[16rem] bg-sky-300 left-[45%] rounded-lg overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className=" w-full h-full bg-sky-400 rounded-lg"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className=" w-full h-full bg-sky-500 rounded-lg"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className=" w-full h-full bg-sky-600 rounded-lg"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className=" w-full h-full bg-sky-700 rounded-lg"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
