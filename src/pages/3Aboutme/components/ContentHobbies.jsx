import React from "react";
import { motion } from "framer-motion";
import ImagenHobbie from "../../../assets/img/Fotos_Info/hobbies2.webp";

export default function ContentHobbies() {
  return (
    <div className="h-full w-full rounded-3xl flex max-sHD:flex-col items-center max-sHD:items-center max-sT:pb-5 max-sHD:justify-center">
      <div className="text-white text-justify overflow-auto sHD:w-3/4 sFHD:px-32 sHD:px-10 sFHD:text-2xl sHD:text-xl sTPROplus:text-2xl sT:text-base max-sHD:mx-6 max-sT:mx-10 max-sTMINI:mx-0 max-sHD:px-1">
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          Soy un desarrollador web full stack junior apasionado por la
          tecnología, pero también disfruto de otros hobbies como la fotografía,
          la edición de video y la animación en 2D. Además, soy un entusiasta de
          los carros y me encanta cocinar para mi familia y amigos. Estos
          hobbies me ayudan a encontrar un equilibrio en mi vida y a disfrutar
          de mi tiempo libre. Si alguna vez quieres hablar sobre ellos,
          ¡pregúntame!
        </motion.p>
      </div>
      <div className="sTMINI:w-1/4 sMINI:w-1/3 sHD:my-auto sFHD:pr-32 sHD:pr-16 max-sHD:py-10 ">
        <img
          className="rounded-full shadow-2xl shadow-black"
          src={ImagenHobbie}
          alt="Imagen de hobbie"
        />
      </div>
    </div>
  );
}
