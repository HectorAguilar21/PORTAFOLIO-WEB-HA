import React from "react";
import { easeInOut, motion } from "framer-motion";
import ProjectDescription from "../components/ProjectDescription";

export default function ContainerProjects({ project }) {
  const variants = {
    slide: {
      x: 800,
    },
    slideComplete: ({ delay }) => ({
      x: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1.5,
      },
    }),

    opacity: {
      x: -100,
      opacity: 0,
    },
    opacityComplete: ({ delay }) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),

    opacityTwo: {
      opacity: 0,
    },
    opacityTwoComplete: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };

  return (
    <div className={`my-auto w-full`}>
      <motion.h1
        className="title-project text-center text-white capitalize sFHD:text-6xl sHD:text-4xl sFHD:pb-10 sHD:pb-2"
        initial="opacityTwo"
        animate="opacityTwoComplete"
        custom={{ delay: 0 }}
        variants={variants}
      >
        {project.title}
      </motion.h1>
      <div
        className={`w-full flex justify-center items-center ${
          //Recordar cambia el !== por el ===
          project.id % 2 !== 0 && "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 flex justify-start">
          <div className="sFHD:w-3/4 sHD:w-10/12 min-h-475 flex items-center overflow-hidden">
            <motion.img
              className="min-w-360 max-h-475 max-w-720 my-auto"
              initial="opacity"
              animate="opacityComplete"
              custom={{ delay: 0.5 }}
              variants={variants}
              src={project.images}
              alt={project.title}
              title={project.title}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <motion.div
            className={`sFHD:w-3/4 sHD:w-10/12 rounded-3xl overflow-hidden ${
              //Recordar cambia el !== por el ===
              project.id % 2 !== 0
                ? "border-r-4 border-cyan-700"
                : "border-l-4 border-indigo-700"
            }`}
            initial="opacityTwo"
            animate="opacityTwoComplete"
            custom={{ delay: 0 }}
            variants={variants}
          >
            <motion.div
              className=""
              initial="slide"
              animate="slideComplete"
              custom={{ delay: 1.5 }}
              variants={variants}
            >
              <ProjectDescription project={project} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
