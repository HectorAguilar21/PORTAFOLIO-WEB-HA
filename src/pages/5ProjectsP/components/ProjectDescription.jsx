import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
import TechFrontendProject from "./TechFrontendProject";
import TechBackendProject from "./TechBackendProject";

export default function ProjectDescription({ project }) {
  const location = useLocation();
  const pathName = location.pathname;

  const variants = {
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
    <motion.div
      className={`sFHD:min-h-475 rounded-3xl transition-all ease-in-out duration-100 backdrop-filter backdrop-blur-md bg-opacity-50 text-white ${
        //Recordar cambia el !== por el ===
        project.id % 2 === 0 ? "bg-indigo-600" : "bg-cyan-600"
      } `}
    >
      <motion.p
        className="parragraph-section text-center rounded-3xl pt-3 sFHD:px-20 sTMINI:px-5 sMINI:px-3 sFHD:text-xl sHD:text-base sTPRO:text-lg"
        initial="opacityTwo"
        animate="opacityTwoComplete"
        custom={{ delay: 1.75 }}
        variants={variants}
      >
        {project.description}
      </motion.p>
      {project.techF.length !== 0 && (
        <TechFrontendProject project={project} pathName={pathName} />
      )}
      {project.techB.length !== 0 && (
        <TechBackendProject project={project} pathName={pathName} />
      )}
      <motion.div
        className="title-buttons flex justify-evenly text-slate-100  uppercase font-semibold sFHD:py-10 sTMINI:py-5 sFHD:text-2xl sHD:text-lg max-sTMINI:pb-10 max-sTMINI:pt-5"
        initial="opacityTwo"
        animate="opacityTwoComplete"
        custom={{ delay: 2.5 }}
        variants={variants}
      >
        <a
          className={`rounded-3xl sT:w-48 sTMINI:w-36 sMINI:w-28 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 p-1 ${
            project.id % 2 === 0
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          } `}
          href={project.github}
          target="_blank"
        >
          Github
        </a>

        <Link
          to={project.path}
          className={`rounded-3xl sT:w-48 sTMINI:w-36 sMINI:w-28 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 p-1 ${
            project.id % 2 === 0
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          } `}
        >
          See more
        </Link>
      </motion.div>
    </motion.div>
  );
}