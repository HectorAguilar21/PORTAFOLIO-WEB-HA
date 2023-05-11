import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import { easeInOut, motion } from "framer-motion";
import Filter from "./components/Filter";
import ContainerProjects from "./views/ContainerProjects";
import { Projects } from "../data/Data";
import scrollAnimation from "../../assets/img/Animation/arrow-down.json";
import BgMeteorIndigo from "../../assets/img/BackGround/Meteor.svg";
import BgMeteorCyan from "../../assets/img/BackGround/Meteor2.svg";

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState(null);

  const scrollOptions = {
    loop: true,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay, duration }) => ({
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration,
      },
    }),
  };

  return (
    <div className="project-page w-screen h-screen relative overflow-auto ">
      <Filter selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
      {Projects.filter((project) =>
        selectedTech
          ? project.techF.some((tech) => tech.title === selectedTech) ||
            project.techB.some((tech) => tech.title === selectedTech)
          : true
      )
        .sort((a, b) => b.id - a.id)
        .map((project, index) => (
          <motion.div
            className={`w-full h-full flex items-center bg-cover bg-no-repeat`}
            style={{
              backgroundImage: `url(${
                project.id % 2 == 0 ? BgMeteorIndigo : BgMeteorCyan
              })`,
            }}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0, duration: 0.75 }}
            variants={variants}
          >
            <ContainerProjects project={project} key={index} />
          </motion.div>
        ))}

      <div className="fixed-bottom bottom-3 sTMINI:w-28 left-1/2 -translate-x-1/2 pointer-events-none sCXS:w-20 sMINI:w-12">
        <Lottie
          options={{ animationData: scrollAnimation, ...scrollOptions }}
        />
      </div>
    </div>
  );
}
