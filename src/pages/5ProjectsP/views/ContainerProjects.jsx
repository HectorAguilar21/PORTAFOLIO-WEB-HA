import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import ProjectDescription from "../components/ProjectDescription";

export default function ContainerProjects({ project }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const variants = {
    slide: {
      x: `${project.id % 2 !== 0 ? 800 : -800}`,
    },
    slideComplete: ({ delay }) => ({
      x: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1.5,
        bounce: 0.4,
      },
    }),

    slideY: {
      y: -225,
    },
    slideYComplete: ({ delay }) => ({
      y: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1.5,
        bounce: 0.4,
      },
    }),

    opacity: {
      x: `${project.id % 2 === 0 ? 100 : -100}`,
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

    opacityY: {
      y: 100,
      opacity: 0,
    },
    opacityYComplete: ({ delay }) => ({
      y: 0,
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
        className="title-project text-center text-white capitalize sFHD:text-6xl sHD:text-4xl sTPRO:text-6xl sTMINI:text-4xl sCXS:text-2xl sMINI:text-xl sFHD:pb-10 pb-2"
        initial="opacityTwo"
        whileInView="opacityTwoComplete"
        custom={{ delay: 0 }}
        viewport={{ once: true, amount: 0.01 }}
        variants={variants}
      >
        {project.title}
      </motion.h1>
      <div
        className={`w-full flex sHD:flex-row sMINI:flex-col justify-center items-center ${
          //Recordar cambia el !== por el ===
          project.id % 2 !== 0 && "sHD:flex-row-reverse"
        }`}
      >
        <div
          className={`sHD:w-1/2 sTMINI:w-4/6 sMINI:w-5/6 sHD:flex ${
            project.id % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <div className="sFHD:w-3/4 sHD:w-10/12 sFHD:min-h-475 flex items-center overflow-hidden">
            <motion.img
              className="sFHD:min-w-360 sHD:max-h-475 sHD:max-w-720 my-auto"
              initial={`${windowWidth < 1280 ? "opacityY" : "opacity"}`}
              whileInView={`${
                windowWidth < 1280 ? "opacityYComplete" : "opacityComplete"
              }`}
              custom={{ delay: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              variants={variants}
              src={project.images}
              alt={project.title}
              title={project.title}
            />
          </div>
        </div>
        <div
          className={`sHD:w-1/2 sTMINI:w-4/6 sMINI:w-5/6 sHD:flex 
          ${project.id % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <motion.div
            className={`sFHD:w-3/4 sHD:w-10/12 rounded-3xl overflow-hidden ${
              windowWidth >= 1280
                ? project.id % 2 !== 0
                  ? "border-r-4 border-cyan-700"
                  : "border-l-4 border-indigo-700"
                : project.id % 2 !== 0
                ? "border-t-4 border-cyan-700"
                : "border-t-4 border-indigo-700"
            }`}
            initial="opacityTwo"
            whileInView="opacityTwoComplete"
            custom={{ delay: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            variants={variants}
          >
            <motion.div
              className=""
              initial={`${windowWidth < 1280 ? "slideY" : "slide"}`}
              whileInView={`${
                windowWidth < 1280 ? "slideYComplete" : "slideComplete"
              }`}
              custom={{ delay: 0.5 }}
              viewport={{ once: true, amount: 0.01 }}
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
