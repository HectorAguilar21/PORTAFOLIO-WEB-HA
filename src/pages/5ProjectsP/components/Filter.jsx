import React from "react";
import { easeInOut, motion } from "framer-motion";
import { BackendList, FrontendList } from "../../data/Data";

export default function Filter({ selectedTech, setSelectedTech }) {
  const variants = {
    opacity: {
      y: -100,
      opacity: 0,
    },
    opacityComplete: ({ delay }) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };
  return (
    <motion.div
      className="fixed-top flex justify-center sFHD:top-5 sHD:top-1 sTMINI:top-5 sMINI:top-2"
      initial="opacity"
      animate="opacityComplete"
      custom={{ delay: 2 }}
      variants={variants}
    >
      <div className="bg-white py-2 sCS:px-10 sMINI:px-3 rounded-full shadow-md shadow-slate-800">
        <label className="title-nav sFHD:text-xl sHD:text-base" htmlFor="tech">
          Filter by technology:
        </label>
        <select
          className="sTMINI:ml-10"
          id="tech"
          value={selectedTech}
          onChange={(event) => setSelectedTech(event.target.value)}
        >
          <option className="text-center" value="">
            All
          </option>
          {FrontendList.map((itemF) => (
            <option className="capitalize text-center" value={itemF.title}>
              {itemF.title}
            </option>
          ))}
          {BackendList.map((itemB) => (
            <option className="capitalize text-center" value={itemB.title}>
              {itemB.title}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}
