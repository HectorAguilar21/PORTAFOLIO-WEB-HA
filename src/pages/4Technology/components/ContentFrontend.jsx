import React from "react";
import { easeInOut, motion } from "framer-motion";
import ModalInfoStack from "./ModalInfoStack";
import { FrontendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

export default function ContentFrontend() {
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

  const dataModal = "rontendModal";
  const titleModal = "Front-end";

  return (
    <div className="sTMINI:min-w-[525px] sHD:w-1/2 sMINI:w-full sFHD:min-h-[400px] sHDplus:min-h-[300px] sHD:min-h-[275px] sMINI:min-h-[400px] pt-[55px] px-3">
      <div className="bg-zinc-200 h-full w-full rounded-3xl relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 sTMINI:-top-10 sMINI:-top-6">
          <h1 className="font-Pattaya text-center font-bold  text-indigo-800 bg-zinc-200 rounded-3xl sCS:py-3 sCS:px-5 sMINI:py-2 sMINI:px-2 sFHD:text-5xl sHD:text-4xl sTPRO:text-5xl sTMINI:text-3xl sMINI:text-xl">
            Front-end
          </h1>
        </div>
        <div className="flex flex-wrap justify-center sHD:pb-[45px] sMINI:pb-[60px] sFHD:pt-[45px] sHD:pt-[30px] sTPRO:pt-[35px] sMINI:pt-[25px] h-full w-full">
          {FrontendList.map((item, index) => (
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
            className="font-SourceSansPro w-full"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${dataModal}`}
          >
            Seguir leyendo...
          </button>
          <ModalInfoStack infoModal={dataModal} titleModal={titleModal}>
            <p>
              Tengo experiencia en tecnologías y lenguajes de programación de
              frontend, como HTML, CSS, JavaScript y frameworks populares como
              Bootstrap 5 y TailwindCSS. También he trabajado con React y React
              Router para crear aplicaciones web interactivas.
            </p>
            <br />
            <p>
              Me apasiona aprender y crecer en el desarrollo web, y estoy
              dispuesto a trabajar en equipo y ofrecer soluciones creativas para
              superar desafíos. Como desarrollador web junior, mi enfoque
              principal es mejorar mis habilidades y contribuir al éxito de los
              proyectos en los que participo.
            </p>
          </ModalInfoStack>
        </div>
      </div>
    </div>
  );
}
