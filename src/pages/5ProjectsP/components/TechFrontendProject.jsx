import React from "react";
import { easeInOut, motion } from "framer-motion";
import { FrontendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

export default function TechFrontendProject({ project, pathName }) {
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
    <>
      <motion.h5
        className="tech-title text-center font-bold sFHD:py-10 sHD:py-5 sMINI:py-3 sFHD:text-3xl sHD:text-2xl sTMINI:text-2xl"
        initial="opacityTwo"
        animate="opacityTwoComplete"
        custom={{ delay: 2 }}
        variants={variants}
      >
        Front-end:
      </motion.h5>
      <div className="flex justify-evenly h-full">
        {project.techF.map((tech, index) => {
          const frontendTech = FrontendList.find(
            (item) => item.title === tech.title
          );
          return (
            frontendTech && (
              <motion.div
                className={`flex items-center border-b-8 ${
                  project.id % 2 !== 0 ? "border-cyan-500" : "border-indigo-500"
                }  pb-2`}
                initial="hidden"
                animate="visible"
                custom={{ delay: (index + 8) * 0.25 }}
                variants={variants}
              >
                <div className="sFHD:h-20 sHDplus:h-12 sHD:h-9 sTPRO:h-16 sT:h-14 sTMINI:h-12 sMINI:h-10">
                  <Images
                    className={`border-b-8`}
                    item={frontendTech}
                    tech={tech}
                    title={frontendTech.title}
                    pathName={pathName}
                  />
                </div>
              </motion.div>
            )
          );
        })}
      </div>
    </>
  );
}
