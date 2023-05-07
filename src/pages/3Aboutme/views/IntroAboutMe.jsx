import React from "react";
import { easeInOut, motion } from "framer-motion";
import { ContentListEmojis } from "../../data/Data";

export default function IntroAboutMe() {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };
  return (
    <div className=" w-full px-6">
      <div className="sCS:py-10 sMINI:py-10 sHD:px-36 sTPRO:px-16 sTMINI:px-8">
        <motion.h1
          className="text-center text-white sFHD:text-6xl sHD:text-4xl sTPRO:text-5xl sCS:text-4xl sMINI:text-2xl"
          initial={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          ¡Bienvenido! Elige una opción de arriba y descubre más sobre quién
          soy.
        </motion.h1>
      </div>
      <div className="sCS:py-10 sMINI:py-1">
        <ul className="flex flex-wrap justify-center max-sHD:px-10 gap-y-4">
          {ContentListEmojis.map((item, index) => (
            <motion.li
              className="text-center sFHD:text-8xl sTPRO:text-6xl sTMINI:text-5xl sCS:text-3xl sMINI:text-2xl "
              initial="hidden"
              animate="visible"
              custom={{ delay: (index + 1) * 0.25 }}
              variants={variants}
            >
              {item.icon}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
