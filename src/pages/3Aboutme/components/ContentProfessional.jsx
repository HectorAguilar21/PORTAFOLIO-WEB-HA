import React from "react";
import { motion } from "framer-motion";

export default function ContentProfessional() {
  return (
    <div className="h-full w-full rounded-3xl flex max-sHD:flex-col items-center max-sT:pb-5">
      <div className="text-white text-justify overflow-auto sHD:w-3/4 sFHD:px-32 sHD:px-10 sFHD:text-3xl sHD:text-2xl sTPROplus:text-3xl sT:text-xl sTMINI:text-lg max-sHD:mx-6 max-sT:mx-10 max-sTMINI:mx-0 max-sHD:px-1 pt-2">
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          Soy un desarrollador web full stack junior con una sólida comprensión
          de las tecnologías de frontend y backend. Me apasiona crear soluciones
          innovadoras y eficientes en línea que brinden una experiencia de
          usuario excepcional. Tengo experiencia en el desarrollo de
          aplicaciones web utilizando una variedad de tecnologías, dos de ellas
          son: React, para el frontend, y Laravel para el backend. Me enfoco en
          el desarrollo de código limpio y escalable que satisface las
          necesidades del cliente y cumple con los estándares de la industria.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          animate={{ opacity: 1 }}
        >
          Continuamente me esfuerzo por mejorar mis habilidades y conocimientos
          para convertirme en un desarrollador web full stack líder en el
          futuro.
        </motion.p>
      </div>
      <div className="w-1/4 sFHD:pr-32 sHD:pr-16 sHD:my-auto max-sHD:py-12 max-sTMINI:hidden">
        <img
          className="rounded-full shadow-2xl shadow-black pt-4"
          src="/src/assets/img/Fotos_perfil/Foto-perfil-3.png"
          alt=""
        />
      </div>
    </div>
  );
}
