import React from "react";
import { Link } from "react-router-dom";

export default function Buttons({ children, path }) {
  return (
    <Link
      to={path}
      className="flex justify-center w-full h-full max-h-75 sHD:max-w-200"
    >
      <div className="relative text-white rounded-lg sFHD:text-3xl sHD:text-2xl sMINI:text-sm sCS:text-base sCXS:text-lg sTMINI:text-base sT:text-lg sTPRO:text-xl group text-center font-semibold uppercase w-full h-full sFHD:px-5 max-sFHD:px-4 max-sCXS:py-2 sFHD:py-3 max-sFHD:py-4 max-sCS:py-2  ">
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-indigo-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-xl"></span>
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-xl"></span>
        <span className="title-buttons relative">{children}</span>
      </div>
    </Link>
  );
}
