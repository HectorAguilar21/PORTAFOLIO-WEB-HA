import React from "react";
import { motion } from "framer-motion";

export default function ContentHobbies() {
  return (
    <div className="h-full w-full rounded-3xl flex max-sHD:flex-col sFHD:items-center max-sHD:items-center max-sT:pb-5">
      <div className="text-white text-justify overflow-auto sHD:w-3/4 sFHD:px-32 sHD:px-10 sFHD:text-2xl sHD:text-xl sTPROplus:text-2xl sT:text-base max-sHD:mx-6 max-sT:mx-10 max-sTMINI:mx-0 max-sHD:px-1">
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          Soy un desarrollador web full stack junior, y aunque me apasiona el
          mundo de la tecnología, también tengo varios hobbies que disfruto
          mucho en mi tiempo libre. Por ejemplo, la fotografía y la edición de
          video son dos hobbies que me apasionan. Me encanta capturar momentos
          únicos y crear contenido visual que sea atractivo y llamativo. Además,
          la animación en 2D de cosas sencillas es otro hobby que disfruto
          mucho, ya que me permite expresar mi creatividad y habilidades
          artísticas de una manera diferente.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          animate={{ opacity: 1 }}
        >
          Además, también soy un gran entusiasta de los carros. Me encanta
          aprender sobre su mecánica y diseño, y me encanta seguir las últimas
          tendencias en el mundo automotriz.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          animate={{ opacity: 1 }}
        >
          Pero, aunque disfruto mucho de estos hobbies, lo que más valoro es
          pasar tiempo con mi familia. Me encanta tener tiempo para relajarme y
          disfrutar de su compañía. Además, otro hobby que tengo es la cocina.
          Me encanta experimentar con diferentes recetas y platos, y pasar
          tiempo cocinando para mi familia y amigos es algo que me hace muy
          feliz.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          animate={{ opacity: 1 }}
        >
          En resumen, aunque mi enfoque profesional está en la tecnología y el
          desarrollo web, estos hobbies me ayudan a encontrar un equilibrio en
          mi vida y me permiten disfrutar de mi tiempo libre al máximo. ¡Si
          alguna vez quieres hablar sobre carros, recetas de cocina o cualquier
          cosa relacionada con mis hobbies, no dudes en preguntarme!
        </motion.p>
      </div>
      <div className="sTMINI:w-1/4 sHD:my-auto sFHD:pr-32 sHD:pr-16 max-sHD:py-10 max-sTMINI:hidden">
        <img
          className="rounded-full shadow-2xl shadow-black"
          src="/src/assets/img/Fotos_Info/Hobbies2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
