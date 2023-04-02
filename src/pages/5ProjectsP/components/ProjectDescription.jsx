import React from "react";
import { Link, useLocation } from "react-router-dom";
import TechFrontendProject from "./TechFrontendProject";
import TechBackendProject from "./TechBackendProject";

export default function ProjectDescription({ project }) {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div
      className={`h-full w-full min-h-475 rounded-3xl transition-all ease-in-out duration-500 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 text-white ${
        //Recordar cambia el !== por el ===
        project.id % 2 !== 0
          ? "border-r-4 border-cyan-700 hover:bg-indigo-600"
          : "border-l-4 border-indigo-700 hover:bg-cyan-600"
      } border-cyan-600`}
    >
      <p className="parragraph-section text-xl text-center rounded-3xl px-20 pt-3">
        {project.description}
      </p>
      {project.techF !== "" && (
        <TechFrontendProject project={project} pathName={pathName} />
      )}
      {project.techB !== "" && (
        <TechBackendProject project={project} pathName={pathName} />
      )}
      <div className="title-buttons flex justify-evenly text-slate-100 text-2xl uppercase font-semibold py-10">
        <a
          className={`${
            project.id % 2 !== 0
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          } p-3 rounded-3xl w-48 text-center transition-all ease-in-out duration-300 shadow-xl`}
          href={project.github}
          target="_blank"
        >
          Github
        </a>

        <Link
          to={project.path}
          className={`${
            project.id % 2 !== 0
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          } p-3 rounded-3xl w-48 text-center transition-all ease-in-out duration-300 shadow-xl`}
        >
          See more
        </Link>
      </div>
    </div>
  );
}
