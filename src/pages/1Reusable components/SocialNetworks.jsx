import React from "react";
import { easeInOut, motion } from "framer-motion";
import { SocialList } from "../data/Data";

export default function SocialNetworks() {
  const variants = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };

  return (
    <div className="h-full w-full sTMINI:min-w-360 sCS:min-w-288 sHD:min-h-475 sTMINI:min-h-350 bg-cyan-700 overflow-hidden">
      <div className="h-full w-full flex flex-col justify-center items-center">
        {SocialList.map((item, index) => (
          <motion.a
            className="flex items-center py-2"
            href={item.path}
            target="_blank"
            initial="hidden"
            animate="visible"
            custom={{ delay: (index + 1) * 0.25 + 2 }}
            variants={variants}
          >
            <img
              className="sFHD:h-11 sHDplus:h-10 sHD:h-9 sTPRO:h-10 sTMINI:h-9 sCXSmax:h-6 sCXS:h-5 sMINI:h-4"
              src={item.iconC}
              alt={item.title}
              title={item.title}
            />
            <h5 className="parragraph-section text-slate-200 sTMINI:pl-3 sMINI:pl-1 sFHD:text-3xl sHDplus:text-2xl sHD:text-xl sTPRO:text-2xl sTMINI:text-xl sCXS:text-bas sCS:text-sm sMINI:text-xs">
              {item.name}
            </h5>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
