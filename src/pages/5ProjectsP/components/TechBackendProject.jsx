import React from "react";
import { easeInOut, motion } from "framer-motion";
import { BackendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

export default function TechBackendProject({ project, pathName }) {
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
        className="tech-title text-center font-bold sFHD:py-10 sHD:py-5 sCXS:py-3 sMINI:py-1 sFHD:text-3xl sHD:text-2xl sTMINI:text-2xl sCXS:text-xl"
        initial="opacityTwo"
        animate="opacityTwoComplete"
        custom={{ delay: 2.25 }}
        variants={variants}
      >
        Back-end:
      </motion.h5>
      <div className="flex justify-evenly">
        {project.techB.map((tech, index) => {
          const backendTech = BackendList.find(
            (item) => item.title === tech.title
          );

          return (
            backendTech && (
              <motion.div
                className={`flex items-center sTMINI:border-b-8 sMINI:border-b-4 ${
                  project.id % 2 !== 0 ? "border-cyan-500" : "border-indigo-500"
                }  pb-2`}
                initial="hidden"
                animate="visible"
                custom={{ delay: (index + 8) * 0.25 }}
                variants={variants}
              >
                <div className="sFHD:h-20 sHDplus:h-12 sHD:h-9 sTPRO:h-16 sT:h-14 sTMINI:h-12 sCXS:h-10 sMINI:h-7">
                  <Images
                    className={`h-20`}
                    item={backendTech}
                    tech={tech}
                    title={backendTech.title}
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
