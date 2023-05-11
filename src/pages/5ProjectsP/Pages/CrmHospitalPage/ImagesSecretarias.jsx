import React from "react";
import { easeInOut, motion } from "framer-motion";
import Carousel from "../Carousel";

export default function ImagesSecretarias({ proyecto }) {
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
        type: "spring",
      },
    }),
    hiddenTwo: {
      opacity: 0,
    },
    visibleTwo: ({ delay, duration }) => ({
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration,
      },
    }),
  };
  return (
    <>
      <motion.p
        className="sHD:px-[100px] py-10 text-white sFHD:text-2xl sHD:text-base sTPRO:text-base sMINI:text-sm font-SofiaSansCondensed text-center"
        initial="hiddenTwo"
        animate="visibleTwo"
        custom={{ delay: 0.5 }}
        variants={variants}
      >
        Dentro del perfil de secretarías, hay diferentes "paneles", donde se
        registran, actualizan, eliminan diferentes datos, según el panel, el rol
        de secretaria tiene accesos restringido a ciertos paneles y también al
        ciertas funcionalidades de los "paneles". A continuación, una serie de
        imágenes según el "panel" y sus posibles acciones.
      </motion.p>
      <div className="container-carousel flex flex-wrap justify-evenly gap-y-10">
        {proyecto.images[3].map((images, index) => (
          <motion.div
            key={index}
            className="max-w-[800px]"
            initial="hidden"
            animate="visible"
            custom={{ delay: (index + 1) * 0.25 + 0.75 }}
            variants={variants}
          >
            <Carousel images={images} carouselNumber={index} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
