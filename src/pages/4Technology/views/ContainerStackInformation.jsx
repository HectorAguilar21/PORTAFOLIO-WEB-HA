import React from "react";
import { easeInOut, motion } from "framer-motion";
import ContentBackend from "../components/ContentBackend";
import ContentFrontend from "../components/ContentFrontend";
import ContentTools from "../components/ContentTools";

export default function ContainerStackInformation() {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut,
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="h-full sCXS:flex justify-center py-12">
      <motion.div
        className="w-10/12 sHD:grid grid-cols-2 grid-rows-3 sHD:gap-11 sTMINI:gap-2 sMINI:gap-10 sMINI:flex sMINI:flex-col sMINI:justify-evenly mx-auto max-sCXS:pb-14"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <ContentFrontend />
        <ContentBackend />
        <ContentTools />
      </motion.div>
    </div>
  );
}
