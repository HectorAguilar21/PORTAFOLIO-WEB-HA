import React from "react";
import { BackendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

export default function TechBackendProject({ project, pathName }) {
  return (
    <>
      <h5 className="tech-title text-center font-bold sFHD:py-10 sHD:py-5 sFHD:text-3xl sHD:text-2xl">
        Back-end:
      </h5>
      <div className="flex justify-evenly">
        {project.techB.map((tech) => {
          const backendTech = BackendList.find(
            (item) => item.title === tech.title
          );

          return (
            backendTech && (
              <div
                className={`flex items-center border-b-8 ${
                  project.id % 2 === 0 ? "border-cyan-500" : "border-indigo-500"
                }  pb-2`}
              >
                <Images
                  className={`h-20 border-b-8 ${
                    project.id % 2 === 0
                      ? "border-cyan-500"
                      : "border-indigo-500"
                  }  pb-2`}
                  item={backendTech}
                  tech={tech}
                  title={backendTech.title}
                  pathName={pathName}
                />
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
