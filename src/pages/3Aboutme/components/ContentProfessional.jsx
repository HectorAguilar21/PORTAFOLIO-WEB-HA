import React from "react";
import { motion } from "framer-motion";
import ImagenPerfilTres from "../../../assets/img/Fotos_perfil/foto-perfil-3.webp";

export default function ContentProfessional() {
  return (
    <div className="h-full w-full rounded-3xl flex max-sHD:flex-col items-center max-sT:pb-5 max-sHD:justify-center">
      <div
        className="text-white text-justify sHD:w-3/4 sFHD:px-32 sHD:px-16 sTPRO:px-16
      sTMINI:px-8 sMINI:px-6 sFHD:text-3xl sHD:text-xl sTPRO:text-2xl sTMINI:text-xl sCXS:text-base sCS:text-sm sMINI:text-xs max-sHD:mx-6 max-sT:mx-10 max-sTMINI:mx-0 max-sHD:px-1 pt-2"
      >
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          Soy un desarrollador web full stack junior con habilidades sólidas
          tanto en el frontend como en el backend. Me apasiona crear soluciones
          innovadoras y eficientes que brinden una excelente experiencia de
          usuario. Con experiencia en React y Laravel, me enorgullece escribir
          código limpio y escalable que cumpla con los estándares de la
          industria y satisfaga las necesidades del cliente. Siempre estoy
          buscando mejorar mis habilidades y conocimientos para convertirme en
          un desarrollador web líder.
        </motion.p>
      </div>
      <div className="sTMINI:w-1/4 sMINI:w-1/3 sHD:my-auto sFHD:pr-32 sHD:pr-16 max-sHD:py-10">
        <img
          className="rounded-full shadow-2xl shadow-black pt-4"
          src={ImagenPerfilTres}
          alt="Imagen foto de perfil"
        />
      </div>
    </div>
  );
}
