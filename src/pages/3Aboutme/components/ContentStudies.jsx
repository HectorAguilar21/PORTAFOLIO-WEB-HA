import React from "react";
import { motion } from "framer-motion";

export default function ContentStudies() {
  return (
    <div className="h-full w-full rounded-3xl flex max-sHD:flex-col items-center max-sT:pb-5 max-sHD:justify-center">
      <div className="sHD:w-3/12 sTMINI:w-6/12 sMINI:w-5/12 sHD:my-auto sFHD:pl-16 sHD:pl-8 max-sHD:py-12 ">
        <img
          className="shadow-2xl shadow-black sTMINI:rounded-3xl sMINI:rounded-lg"
          src="/src/assets/img/Fotos_Info/DiplomaKodigo.jpg"
          alt=""
        />
      </div>
      <div className="text-white text-justify overflow-auto sHD:w-9/12 sFHD:px-32 sHD:px-10 sFHD:text-2xl sHD:text-xl sTPROplus:text-3xl sT:text-xl max-sHD:mx-6 max-sT:mx-10 max-sTMINI:mx-0 max-sHD:px-1">
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          Soy un desarrollador web full stack junior con una pasión por el
          aprendizaje y la tecnología. Mi interés por la tecnología me llevó a
          explorar diferentes áreas y, finalmente, a completar un bootcamp de
          seis meses en Desarrollo Web Full Stack. También he complementado mi
          formación con cursos en Udemy para mejorar aún más mis habilidades.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          animate={{ opacity: 1 }}
        >
          Mi curiosidad natural y mi dedicación al aprendizaje continuo me han
          llevado a tener una mentalidad autodirigida y un compromiso con la
          mejora constante de mis habilidades en este campo.
        </motion.p>
      </div>
    </div>
  );
}
