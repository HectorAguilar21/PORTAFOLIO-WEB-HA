import React from "react";
import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import SocialNetworks from "../../1Reusable components/SocialNetworks";
import FormContact from "../../1Reusable components/FormContact";

export default function ContainerContact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const variants = {
    slide: {
      x: -300,
    },
    slideComplete: ({ delay }) => ({
      x: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),

    slideSecond: {
      y: -400,
    },
    slideSecondComplete: ({ delay }) => ({
      y: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),

    slideThird: {
      y: -200,
    },
    slideThirdComplete: ({ delay }) => ({
      y: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),

    scale: {
      scale: 0,
    },
    scaleComplete: ({ delay }) => ({
      scale: 1,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),

    opacity: {
      opacity: 0,
    },
    opacityComplete: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        ease: easeInOut,
        duration: 1,
      },
    }),
  };
  return (
    <motion.div className="my-auto w-full">
      <motion.h1
        className="title-section font-bold text-amber-400 text-center sHD:text-8xl sTPRO:text-7xl sTMINI:text-6xl sCXS:text-4xl sCS:text-3xl sMINI:text-xl sCXS:pb-3 sCS:pb-1"
        initial="opacity"
        animate="opacityComplete"
        custom={{ delay: 4.25 }}
        variants={variants}
      >
        Let's team up!
      </motion.h1>
      <div className=" w-full pb-2 sHD:flex sHD:justify-center sHD:items-center">
        <div className="flex sHD:w-1/2 sHD:justify-end sMINI:justify-center">
          <motion.div
            className="sHD:w-3/4 sMINI:w-5/6"
            initial="opacity"
            animate="opacityComplete"
            custom={{ delay: 2 }}
            variants={variants}
          >
            <SocialNetworks />
          </motion.div>
        </div>
        <motion.div
          className="flex sHD:w-1/2 sHD:justify-start sMINI:justify-center"
          initial={
            windowWidth <= 1024 && windowWidth > 414
              ? "slideSecond"
              : windowWidth <= 414
              ? "slideThird"
              : "slide"
          }
          animate={
            windowWidth <= 1024 && windowWidth > 414
              ? "slideSecondComplete"
              : windowWidth <= 414
              ? "slideThirdComplete"
              : "slideComplete"
          }
          custom={{ delay: 1.5 }}
          variants={variants}
        >
          <motion.div
            className="sHD:w-3/4 sMINI:w-5/6"
            initial="scale"
            animate="scaleComplete"
            custom={{ delay: 0 }}
            variants={variants}
          >
            <FormContact />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
