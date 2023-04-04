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
        className="tech-title text-center font-bold sFHD:py-10 sHD:py-5 sFHD:text-3xl sHD:text-2xl"
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
                className={`flex items-center border-b-8 ${
                  project.id % 2 !== 0 ? "border-cyan-500" : "border-indigo-500"
                }  pb-2`}
                initial="hidden"
                animate="visible"
                custom={{ delay: (index + 8) * 0.25 }}
                variants={variants}
              >
                <Images
                  className={`h-20`}
                  item={backendTech}
                  tech={tech}
                  title={backendTech.title}
                  pathName={pathName}
                />
              </motion.div>
            )
          );
        })}
      </div>
    </>
  );
}
