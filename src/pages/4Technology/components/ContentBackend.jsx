import React from "react";
import { easeInOut, motion } from "framer-motion";
import ModalInfoStack from "./ModalInfoStack";
import { BackendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

export default function ContentBackend() {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };

  const dataModal = "backendModal";
  const titleModal = "Back-end";

  return (
    <div className="sTMINI:min-w-[525px] sHD:w-1/2 sMINI:w-full sFHD:min-h-[400px] sHDplus:min-h-[300px] sHD:min-h-[275px] sMINI:min-h-[400px] pt-[55px] px-3">
      <div className="bg-zinc-200 h-full w-full rounded-3xl relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 sTMINI:-top-10 sMINI:-top-6 z-0">
          <h1 className="title-stack text-center font-bold  text-indigo-800 bg-zinc-200 rounded-3xl sCS:py-3 sCS:px-5 sMINI:py-2 sMINI:px-2 sFHD:text-5xl sHD:text-4xl sTPRO:text-5xl sTMINI:text-3xl sMINI:text-xl">
            Back-end
          </h1>
        </div>
        <div className="flex flex-wrap justify-center sHD:pb-[45px] sMINI:pb-[60px] sFHD:pt-[45px] sHD:pt-[30px] sTPRO:pt-[35px] sMINI:pt-[30px] h-full w-full">
          {BackendList.map((item, index) => (
            <motion.div
              className={`flex flex-col justify-center items-center sFHD:w-52 sHDplus:w-44 sHD:w-40 sTPRO:w-48 sT:w-40 sTMINI:w-36 sCXS:w-32 sMINI:w-28 pb-7`}
              initial="hidden"
              animate="visible"
              custom={{ delay: (index + 1) * 0.25 }}
              variants={variants}
            >
              <div className="sFHD:h-20 sHDplus:h-12 sHD:h-9 sTPRO:h-16 sT:h-14 sTMINI:h-12 sMINI:h-10">
                <Images item={item} key={index} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 bg-indigo-700 hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out duration-500 w-full rounded-b-2xl text-white text-center text-xl py-2">
          <button
            className="title-buttons w-full"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${dataModal}`}
          >
            Seguir leyendo...
          </button>
          <ModalInfoStack infoModal={dataModal} titleModal={titleModal}>
            <p>
              Como desarrollador web junior, tengo experiencia en desarrollo de
              backend utilizando diferentes tecnologías como PHP y su framework
              popular Laravel 9+. También he trabajado con bases de datos
              relacionales como MySQL, implementando modelos de datos eficientes
              y consultas optimizadas para un mejor rendimiento.
            </p>
            <br />
            <p>
              En resumen, tengo amplia experiencia en desarrollo backend
              utilizando tecnologías como PHP, Laravel 9+ y MySQL. Siempre estoy
              en constante aprendizaje y buscando nuevas formas de mejorar mis
              habilidades para aplicarlas en el desarrollo de proyectos web
              exitosos.
            </p>
          </ModalInfoStack>
        </div>
      </div>
    </div>
  );
}
