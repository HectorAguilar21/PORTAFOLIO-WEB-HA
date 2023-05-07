import React from "react";
import { motion } from "framer-motion";
import FondoFamilia from "../../../assets/img/Fotos_Info/familia.webp";

export default function ContentPersonal() {
  return (
    <motion.div
      className="flex w-full bg-cover bg-center rounded-3xl h-full "
      style={{ backgroundImage: `url(${FondoFamilia})` }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      animate={{ opacity: 1 }}
    >
      <div
        className="sHD:px-28 sTMINI:px-16 sMINI:px-6 w-full sFHD:text-3xl sHD:text-xl sTPRO:text-2xl sTMINI:text-xl sCXS:text-base sCS:text-sm sMINI:text-xs text-white text-justify bg-slate-900 bg-opacity-80 rounded-3xl flex
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
