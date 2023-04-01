import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Images from "../../1Reusable components/Images";
import { FrontendList, BackendList } from "../../data/Data";

export default function ContainerProjects2({ project }) {
  const location = useLocation();
  const pathName = location.pathname;

  const projectVariants = {
    offscreen: {
      x: `${project.id % 2 === 0 ? 800 : -800}`,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <div className="h-full w-5/6 flex flex-col justify-center pb-10">
      <h1 className="title-project text-center text-6xl text-white capitalize pb-20 ">
        {project.title}
      </h1>
      <div
        className={`w-full flex justify-center items-center mx-auto ${
          project.id % 2 === 0 && "flex-row-reverse"
        }`}
      >
        <div
          className={`h-full flex items-center w-1/2 ${
            project.id % 2 === 0 ? "bg-indigo-700" : "bg-cyan-700"
          } pr-20 z-50`}
        >
          <img className="" src={project.images} alt="" />
        </div>
        <motion.div
          className={`w-1/2 h-full rounded-3xl transition-all ease-in-out duration-500 ${
            project.id % 2 === 0
              ? "border-r-2 border-cyan-700 hover:bg-indigo-600"
              : "border-l-2 border-indigo-700 hover:bg-cyan-600"
          } border-cyan-600`}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="h-full flex flex-col justify-evenly text-white"
            variants={projectVariants}
          >
            <p className="parragraph-section text-xl text-center rounded-3xl px-20 pt-3">
              {project.description}
            </p>
            {project.techF !== "" && (
              <>
                <h5 className="tech-title text-center text-3xl font-bold py-10">
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
                            project.id % 2 === 0
                              ? "border-cyan-500"
                              : "border-indigo-500"
                          }  pb-2`}
                        >
                          <Images
                            className={`h-20 border-b-8 ${
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
            )}
            {project.techB !== "" && (
              <>
                <h5 className="tech-title text-center text-3xl font-bold py-10">
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
                            project.id % 2 === 0
                              ? "border-cyan-500"
                              : "border-indigo-500"
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
            )}
            <div className="title-buttons flex justify-evenly text-slate-100 text-2xl uppercase font-semibold py-10">
              <a
                className={`${
                  project.id % 2 === 0
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
                  project.id % 2 === 0
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } p-3 rounded-3xl w-48 text-center transition-all ease-in-out duration-300 shadow-xl`}
              >
                See more
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
