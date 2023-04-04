import React from "react";
import Lottie from "react-lottie";
import { easeInOut, motion } from "framer-motion";
import Buttons from "../components/Buttons";
import { ButtonList } from "../../data/Data";
import imagotipoData from "/src/assets/img/Logo/Imagotipo/Animaciones/imagotipoAnimacionAdaptadaSFI.json";

export default function Cover() {
  const coverOptions = {
    loop: false,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      scale: [1, 1.2, 1.2, 1, 1],
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };

  return (
    <div className="cover sHD:h-11/12 sMINI:h-5/6 w-5/6 m-auto flex max-sHD:flex-col max-sHD:justify-evenly max-sCS:justify-center">
      <div className="flex items-center sHD:h-full sHD:w-2/3 max-sHD:justify-center sMINI:h-1/3">
        <div className="w-5/6 text-white font-extrabold text-center sFHD:text-9xl sHD:text-8xl sTPRO:text-8xl sT:text-7xl sTMINI:text-6xl sCXSmax:text-5xl sCS:text-4xl sMINI:text-3xl">
          <motion.h1
            className="title-name"
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 2, delay: 1 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hi everyone, I'm
          </motion.h1>
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 1 }}
            animate={{ opacity: 1 }}
          >
            <Lottie
              title="Hector Aguilar Web Developer"
              options={{
                animationData: imagotipoData,
                ...coverOptions,
              }}
            />
          </motion.div>
        </div>
      </div>
      <div className=" sHD:w-1/3 max-sHD:flex sHD:justify-center sMINI:flex-col sTMINI:flex-row sHD:flex-col my-auto sHD:h-full sMINI:h-2/3 max-sTMINI:items-center">
        <div className="my-auto sHD:h-2/3 max-sHD:w-4/6 max-sTMINI:w-4/6 flex">
          <motion.img
            className="rounded-full shadow-2xl shadow-black my-auto mx-auto max-h-full"
            src="/src/assets/img/Fotos_perfil/Foto-perfil-2.png"
            alt="Foto de perfil"
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 2, delay: 3 }}
            animate={{ opacity: 1 }}
          />
        </div>
        <div className="sHD:h-1/3 flex items-center justify-center max-sHD:w-2/6 max-sTMINI:w-full">
          <div className="sHD:max-w-450 max-sHD:w-2/3 max-sTMINI:w-5/6 max-h-full HD:pt-7 max-sTMINI:pt-8 max-sCXS:pt-4 max-sCS:pt-0 sHD:grid sHD:grid-cols-2 max-sHD:flex max-sHD:flex-col max-sHD:justify-evenly max-sTMINI:grid max-sTMINI:grid-cols-2 gap-4 pt-2">
            {ButtonList.map((item, index) => (
              <motion.div
                className="flex justify-center items-center"
                initial="hidden"
                animate="visible"
                custom={{ delay: (index + 1) * 0.25 + 2.5 }}
                variants={variants}
              >
                <Buttons path={item.path}>{item.title}</Buttons>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
