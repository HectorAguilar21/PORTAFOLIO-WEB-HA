import React from "react";
import ProjectDescription from "../components/ProjectDescription";

export default function ContainerProjects({ project }) {
  return (
    <div className="my-auto w-full">
      <h1 className="title-project text-center text-6xl text-white capitalize pb-20 ">
        {project.title}
      </h1>
      <div
        className={`w-full flex justify-center items-center ${
          //Recordar cambia el !== por el ===
          project.id % 2 !== 0 && "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 flex justify-start">
          <div className="w-3/4 min-h-475 ">
            <img
              className="min-w-360 max-h-475 max-w-720"
              src={project.images}
              alt={project.title}
              title={project.title}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="w-3/4">
            <ProjectDescription />
          </div>
        </div>
      </div>
    </div>
  );
}
