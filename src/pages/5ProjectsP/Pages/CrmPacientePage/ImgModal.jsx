import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function ImgModal({ setOptionSelected, optionSelected }) {
  if (!optionSelected) {
    return <></>;
  }
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: ({ duration }) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration,
      },
    }),
    hiddenTwo: {
      opacity: 0,
    },
    visibleTwo: ({ delay, duration }) => ({
      opacity: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration,
      },
    }),
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
      onClick={() => setOptionSelected(null)}
    >
      <div
        className="w-4/6 mx-auto cursor-default my-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <motion.img
            src={optionSelected.image.image}
            alt=""
            layoutId={`card-${optionSelected.title}`}
          />
          <motion.h2
            className="absolute bottom-2 left-1/2 -translate-x-1/2 title-project text-4xl"
            initial="hiddenTwo"
            animate="visibleTwo"
            custom={{ duration: 0.5, delay: 0.5 }}
            variants={variants}
          >
            {optionSelected.title}
          </motion.h2>
        </div>
        <motion.div
          className="bg-slate-500 p-4"
          initial="hidden"
          animate="visible"
          custom={{ duration: 0.5 }}
          variants={variants}
        >
          <p className="description-section text-white text-3xl text-center font-semibold">
            {optionSelected.image.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
