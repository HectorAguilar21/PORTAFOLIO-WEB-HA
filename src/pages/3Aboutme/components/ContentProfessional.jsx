import React from "react";
import { motion } from "framer-motion";

export default function ContentProfessional() {
  return (
    <div className="h-full w-full rounded-3xl flex max-sHD:flex-col items-center max-sT:pb-5 max-sHD:justify-center">
      <div className="text-white text-justify overflow-auto sHD:w-3/4 sFHD:px-32 sHD:px-10 sFHD:text-3xl sHD:text-2xl sTPROplus:text-3xl sT:text-xl sTMINI:text-lg max-sHD:mx-6 max-sT:mx-10 max-sTMINI:mx-0 max-sHD:px-1 pt-2">
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
      <div className="w-1/4 sFHD:pr-32 sHD:pr-16 sHD:my-auto max-sHD:py-12 max-sTMINI:hidden">
        <img
          className="rounded-full shadow-2xl shadow-black pt-4"
          src="img/Fotos_perfil/foto-perfil-2.webp"
          alt=""
        />
      </div>
    </div>
  );
}
