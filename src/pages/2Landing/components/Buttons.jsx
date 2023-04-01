import React from "react";
import { Link } from "react-router-dom";

export default function Buttons({ children, path }) {
  return (
    <Link
      to={path}
      className="flex justify-center sFHD:py-4 sHD:py-3 max-sTMINI:py-2"
    >
      <div className="relative text-white rounded-lg group text-center font-semibold uppercase sFHD:text-3xl sHD:text-2xl sTPRO:text-4xl sTMINI:text-2xl sCXS:text-xl sCS:text-lg sMINI:text-xs sFHD:w-48 sHD:w-40 sTMINI:w-full sCS:w-32 sMINI:w-22 sFHD:px-6 max-sFHD:px-4 max-sCXS:py-2 sFHD:py-4 max-sFHD:py-4 max-sCS:py-1 ">
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-indigo-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-xl"></span>
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-xl"></span>
        <span className="title-buttons relative">{children}</span>
      </div>
    </Link>
  );
}
