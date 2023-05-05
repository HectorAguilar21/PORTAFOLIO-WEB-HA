import React, { useState, useEffect, useRef } from "react";
import { Projects } from "../data/Data";
import scrollAnimation from "../../../public/img/Animation/arrow-down.json";
import Lottie from "react-lottie";
import ContainerProjects from "./views/ContainerProjects";
import Filter from "./components/Filter";

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState(null);

  const [reachedEndOfPage, setReachedEndOfPage] = useState(false);

  function detectarFinDePagina() {
    const alturaTotal = document.body.scrollHeight;
    const alturaVisible = window.innerHeight;
    const posicionActual = window.scrollY;

    if (alturaTotal - (alturaVisible + posicionActual) === 0) {
      setReachedEndOfPage(true);
    } else {
      setReachedEndOfPage(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", detectarFinDePagina);
    return () => window.removeEventListener("scroll", detectarFinDePagina);
  }, []);

  const scrollOptions = {
    loop: true,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  return (
    <div className="project-page w-screen h-screen relative overflow-auto">
      <Filter selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
      {Projects.filter((project) =>
        selectedTech
          ? project.techF.some((tech) => tech.title === selectedTech) ||
            project.techB.some((tech) => tech.title === selectedTech)
          : true
      )
        .sort((a, b) => b.id - a.id)
        .map((project, index) => (
          <div
            className={`w-full h-full overflow-auto flex items-center bg-cover bg-no-repeat ${
              project.id % 2 !== 0 ? "background-indigo" : "background-cyan"
            }`}
          >
            <ContainerProjects project={project} key={index} />
          </div>
        ))}

      <div className="fixed-bottom bottom-3 w-28 left-1/2 -translate-x-1/2 pointer-events-none">
        <Lottie
          options={{ animationData: scrollAnimation, ...scrollOptions }}
        />
      </div>
    </div>
  );
}
