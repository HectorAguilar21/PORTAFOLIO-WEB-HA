import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Lottie from "react-lottie";
import Card from "./Card";
import ImgModal from "./ImgModal";
import scrollAnimation from "../../../../assets/img/Animation/arrow-down.json";
import { Projects } from "../../../data/Data";

export default function CrmPacientePage() {
  const [proyecto, setProyecto] = useState({});
  const [loadingProyecto, setLoadingProyecto] = useState(true);

  useEffect(() => {
    const proyecto = Projects.find(
      (project) => project.title === "CRM Pacientes"
    );
    setProyecto(proyecto);
    setLoadingProyecto(false);
  }, []);

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
    slide: {
      x: -1300,
    },
    slideComplete: ({ delay, duration }) => ({
      x: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration,
      },
    }),
  };

  const [optionSelected, setOptionSelected] = useState("");

  return (
    <>
      {loadingProyecto ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <motion.h1
            className="font-Alkatra text-center font-light text-amber-400 sFHD:text-5xl sHD:text-3xl sTPRO:text-4xl sTMINI:text-3xl sCXS:text-2xl sMINI:text-xl pt-4"
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.5, duration: 0.75 }}
            variants={variants}
          >
            {proyecto.title}
          </motion.h1>
          <section className="flex w-full p-10 items-center sHD:flex-row sMINI:flex-col">
            <div className="sHD:w-1/2 flex flex-col items-end">
              <motion.img
                className="sHD:w-5/6 sTMINI:w-4/6 sHD:mr-5 shadow-2xl shadow-black rounded-md border-cyan-500 border-2 max-sHD:m-auto"
                src={proyecto.images[0].image.image}
                alt="imagen de la pagina principal de la aplicacion"
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.75, duration: 1.5 }}
                variants={variants}
              />
              <motion.div
                className="font-SourceSansPro sHD:w-5/6 sTMINI:w-4/6 flex flex-wrap gap-y-2 gap-x-1 justify-evenly text-slate-100  uppercase font-semibold sFHD:py-10 sTMINI:py-5 sFHD:text-2xl sHD:text-lg max-sTMINI:pb-5 max-sTMINI:pt-5 sHD:mr-5 max-sHD:m-auto"
                initial="hidden"
                animate="visible"
                custom={{ delay: 1.75 }}
                variants={variants}
              >
                <a
                  className={`rounded-3xl sT:w-48 sTMINI:w-36 sMINI:w-28 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 sCXS:p-1 sMINI:p-0
                  bg-cyan-600 hover:bg-cyan-700`}
                  href={proyecto.github}
                  target="_blank"
                >
                  Github
                </a>
                <a
                  className={`rounded-3xl sT:w-48 sTMINI:w-36 sMINI:w-28 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 sCXS:p-1 sMINI:p-0 bg-cyan-600 hover:bg-cyan-700`}
                  href={proyecto.page}
                  target="_blank"
                >
                  Pagina
                </a>
              </motion.div>
            </div>
            <div className="sHD:w-1/2 overflow-hidden">
              <motion.p
                className="font-SofiaSansCondensed sHD:w-5/6 sHD:ml-5 text-center sFHD:text-2xl sHD:text-base sTPRO:text-base sTMINI:text-sm sMINI:text-xs text-zinc-300 font-medium max-sHD:m-auto max-sHD:pt-10"
                initial="slide"
                animate="slideComplete"
                custom={{ delay: 1.25, duration: 1.25 }}
                variants={variants}
              >
                "En nuestro proyecto de{" "}
                <span>
                  <a
                    className="underline-offset-4 text-decoration-underline text-amber-400 hover:text-amber-500"
                    href="PORTAFOLIO-WEB-HA#/projects/crm-hospital"
                    target="_blank"
                  >
                    CRM Hospital
                  </a>
                </span>{" "}
                diseñado para simplificar la gestión de la atención médica, te
                mostre los paneles y opciones a realizar dentro de la app. "CRM
                Pacientes" es la extension de esa app que da cara al cliente,
                con este sistema podrás administrar fácilmente tus citas, datos,
                comentarios, resultados, y ver los hospitales con sus
                especialidades. Desarrollado por mi persona para la finalizacion
                de un bootcamp de 6 meses, este proyecto es un ejemplo perfecto
                de cómo la tecnología puede optimizar y mejorar el proceso de
                atención médica, ahorrando tiempo y recursos para ofrecer un
                mejor cuidado a los pacientes. ¡Únete a nosotros y transforma la
                forma en que manejas la gestión hospitalaria!"
              </motion.p>
            </div>
          </section>
          <motion.div
            className="w-full flex"
            initial="hidden"
            animate="visible"
            custom={{ delay: 1.5, duration: 1.5 }}
            variants={variants}
          >
            <div className="w-full flex flex-col items-center">
              <div className="m-auto sTMINI:w-28 pointer-events-none sCXS:w-20 sMINI:w-12">
                <Lottie
                  options={{ animationData: scrollAnimation, ...scrollOptions }}
                />
              </div>
            </div>
          </motion.div>
          <motion.section
            className="flex w-full sCXS:p-10 sMINI:p-5"
            initial="hidden"
            animate="visible"
            custom={{ delay: 2, duration: 1.5 }}
            variants={variants}
          >
            <div className="flex flex-wrap gap-10 justify-evenly">
              {proyecto.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={{ delay: (index + 1) * 0.25 + 2 }}
                  variants={variants}
                >
                  <Card image={image} setOptionSelected={setOptionSelected} />
                </motion.div>
              ))}
            </div>
            <ImgModal
              setOptionSelected={setOptionSelected}
              optionSelected={optionSelected}
            />
          </motion.section>
        </>
      )}
    </>
  );
}
