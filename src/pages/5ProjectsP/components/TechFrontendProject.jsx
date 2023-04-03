import React from "react";
import { FrontendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

export default function TechFrontendProject({ project, pathName }) {
  return (
    <>
      <h5 className="tech-title text-center font-bold sFHD:py-10 sHD:py-5 sFHD:text-3xl sHD:text-2xl">
        Front-end:
      </h5>
      <div className="flex justify-evenly">
        {project.techF.map((tech) => {
          const frontendTech = FrontendList.find(
            (item) => item.title === tech.title
          );
          return (
            frontendTech && (
              <div
                className={`flex items-center border-b-8 ${
                  project.id % 2 === 0 ? "border-cyan-500" : "border-indigo-500"
                }  pb-2`}
              >
                <Images
                  className={`h-10 border-b-8 ${
                    project.id % 2 === 0
                      ? "border-cyan-500"
                      : "border-indigo-500"
                  }  pb-2`}
                  item={frontendTech}
                  tech={tech}
                  title={frontendTech.title}
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
