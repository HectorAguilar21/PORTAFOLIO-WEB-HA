import React from "react";
import { motion } from "framer-motion";

export default function ContentPersonal() {
  return (
    <motion.div
      className="container-personal flex w-full bg-cover bg-center rounded-3xl sCXS:h-full sCS:h-11/12 sMINI:h-5/6 max-sHD:justify-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      animate={{ opacity: 1 }}
    >
      <div
        className="sTMINI:px-16 sMINI:px-3 pt-6 w-full sFHD:text-2xl sHD:text-xl sTPROplus:text-2xl sT:text-base text-white text-justify overflow-auto bg-slate-900 bg-opacity-80 rounded-3xl flex
      "
      >
        <motion.p
          className="m-auto"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          La vida me ha enseñado mucho, desde la importancia de estar agradecido
          por lo que tenemos hasta la valoración del amor y la paciencia. Tengo
          cuatro pilares fundamentales en mi vida: mi hijo, quien me ha enseñado
          que el amor es lo más importante y me ha convertido en un estudiante
          dedicado; mi pareja, con quien he aprendido la importancia de la
          comunicación y la paciencia en una relación; mi madre, quien ha sido
          mi guía y apoyo en los momentos más difíciles, enseñándome el valor
          del trabajo duro, la honestidad y la perseverancia; y mi fe en Dios,
          quien me da la fuerza y la motivación para superar los obstáculos y
          hacer una diferencia positiva en el mundo.
        </motion.p>
      </div>
    </motion.div>
  );
}
