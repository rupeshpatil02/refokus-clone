import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-between">
      <div className="max-w-screen-xl flex gap-5 pb-7 pl-7 pt-5">
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Terms",
          "Webflow Agency",
          "-Developed by Rupesh Patil",
        ].map((item, idx) => (
          <ul>
            <li className="text-zinc-500 text-xs tracking-tighter cursor-pointer hover:translate-x-1 duration-300 hover:scale-100">
              {item}
            </li>
          </ul>
        ))}
      </div>
      <img
        className="pr-7 hover:scale-95 duration-300 cursor-pointer"
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
        alt=""
      />
    </div>
  );
}

export default Footer;
