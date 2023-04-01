import React, { useState } from "react";
import { Projects } from "../data/Data";
import { motion } from "framer-motion";
import ContainerProjects2 from "./views/ContainerProjects2";
import ContainerProjects from "./views/ContainerProjects";
import Filter from "./components/Filter";

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="project-page w-screen h-screen relative overflow-auto flex items-center">
      <Filter selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
      {Projects.filter((project) =>
        selectedTech
          ? project.techF.some((tech) => tech.title === selectedTech) ||
            project.techB.some((tech) => tech.title === selectedTech)
          : true
      )
        .sort((a, b) => b.id - a.id)
        .map((project, index) => (
          <ContainerProjects project={project} key={index} />
          // <motion.div
          //   key={index}
          //   className={`h-screen w-screen flex justify-center items-center overflow-scroll my-auto ${
          //     project.id % 2 === 0 ? "bg-indigo-700" : "bg-cyan-700"
          //   }`}
          //   initial={{
          //     opacity: 0,
          //     scale: 0.5,
          //   }}
          //   transition={{ duration: 0.5 }}
          //   animate={{
          //     opacity: 1,
          //     scale: 1,
          //   }}
          // >
          //   <ContainerProjects project={project} key={index} />
          // </motion.div>
        ))}
    </div>
  );
}
