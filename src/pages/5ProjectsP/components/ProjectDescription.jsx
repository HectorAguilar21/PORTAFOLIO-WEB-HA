import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
import TechFrontendProject from "./TechFrontendProject";
import TechBackendProject from "./TechBackendProject";

export default function ProjectDescription({ project }) {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div
      className={`min-h-475 rounded-3xl transition-all ease-in-out duration-100 backdrop-filter backdrop-blur-3xl bg-opacity-50 text-white ${
        //Recordar cambia el !== por el ===
        project.id % 2 !== 0 ? "bg-indigo-600" : "bg-cyan-600"
      } `}
    >
      <p className="parragraph-section text-center rounded-3xl pt-3 sFHD:px-20 sHD:px-5 sFHD:text-xl sHD:text-base">
        {project.description}
      </p>
      {project.techF !== "" && (
        <TechFrontendProject project={project} pathName={pathName} />
      )}
      {project.techB !== "" && (
        <TechBackendProject project={project} pathName={pathName} />
      )}
      <div className="title-buttons flex justify-evenly text-slate-100  uppercase font-semibold sFHD:py-10 sHD:py-5 sFHD:text-2xl sHD:text-lg">
        <a
          className={`rounded-3xl w-48 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 sHD:p-1 ${
            project.id % 2 !== 0
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
          className={`rounded-3xl w-48 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 sHD:p-1 ${
            project.id % 2 !== 0
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          } `}
        >
          See more
        </Link>
      </div>
    </div>
  );
}
