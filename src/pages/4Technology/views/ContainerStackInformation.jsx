import React from "react";
import { easeInOut, motion } from "framer-motion";
import ContentFrontend from "../components/ContentFrontend";
import ContentBackend from "../components/ContentBackend";
import ContentTools from "../components/ContentTools";
// import ContentBackend from "../components/ContentBackend2";
// import ContentFrontend from "../components/ContentFrontend2";
// import ContentTools from "../components/ContentTools2";

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
    <div className="w-full flex justify-center sHD:h-full pb-4">
      <motion.div
        className="flex flex-wrap justify-center w-10/12"
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
