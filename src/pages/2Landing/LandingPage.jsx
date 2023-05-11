import React from "react";
import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Loading from "../1Reusable components/Loading";
import Cover from "./views/Cover";
import BgMeteorIndigo from "../../assets/img/BackGround/Meteor2.svg";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        ease: easeInOut,
        type: "spring",
        duration: 1,
      },
    }),
  };

  return (
    <div
      className={`landing-page flex w-screen h-screen bg-fixed overflow-auto bg-cover bg-no-repeat relative`}
      style={{ backgroundImage: `url(${BgMeteorIndigo})` }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Cover />
          <motion.a
            className="absolute bg-white sT:top-[25px] sMINI:top-[5px] left-0 uppercase font-bold font-SourceSansPro sT:text-2xl sCS:text-base sMINI:text-sm sCS:px-3 sMINI:px-1 sCS:py-1 sMINI:py-[2px] rounded-tr-3xl rounded-br-3xl shadow-2xl shadow-black"
            href="../../../assets/pdf/CV Hector Aguilar.pdf"
            initial="hidden"
            animate="visible"
            custom={{ delay: 3 }}
            variants={variants}
            download
          >
            Descargar CV
          </motion.a>
        </>
      )}
    </div>
  );
}
