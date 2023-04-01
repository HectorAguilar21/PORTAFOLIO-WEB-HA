import React from "react";
import { easeInOut, motion } from "framer-motion";
import Images from "../../1Reusable components/Images";
import ModalInfoStack from "./ModalInfoStack";
import { BackendList } from "../../data/Data";

export default function ContentBackend() {
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
      },
    }),
  };

  const backendListCount = BackendList.length;

  const dataModal = "backendModal";
  const titleModal = "Back-end";

  return (
    <div className="rounded-3xl bg-zinc-200 relative shadow-2xl shadow-black row-span-2">
      <div className="absolute left-1/2 transform -translate-x-1/2 sTMINI:-top-10 sMINI:-top-6 z-0">
        <h1 className="title-stack text-center font-bold pt-3 text-indigo-800 bg-zinc-200 rounded-3xl sCS:py-3 sCS:px-5 sMINI:py-2 sMINI:px-2 sT:text-5xl sTMINI:text-3xl sMINI:text-xl">
          Back-end
        </h1>
      </div>
      <div className="w-full h-full flex justify-evenly items-center gap-y-5 flex-wrap sTMINI:pt-14 sTMINI:pb-20 sMINI:pt-10 sMINI:pb-14">
        {BackendList.map((item, index) => (
          <motion.div
            className={`flex flex-col items-center sFHD:w-52 sHDplus:w-44 sHD:w-40 sTPRO:w-56 max-sTMINI:w-24 `}
            initial="hidden"
            animate="visible"
            custom={{ delay: (index + 1) * 0.25 + 1 }}
            variants={variants}
          >
            <Images item={item} key={index} />
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 bg-cyan-700 hover:bg-indigo-500 hover:cursor-pointer transition-all ease-in-out duration-500 w-full rounded-b-2xl text-white text-center text-xl py-2">
        <button
          className="title-buttons"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#${dataModal}`}
        >
          Keep reading
        </button>
        <ModalInfoStack infoModal={dataModal} titleModal={titleModal}>
          <p>
            As a junior web developer, I have experience in backend development
            using different technologies. In particular, I have worked with PHP
            and its popular Laravel 9+ framework, which has allowed me to build
            robust and scalable web applications effectively, as well as build
            APIs to consume on the frontend.
          </p>
          <br />
          <p>
            In addition, I have also worked with Node.js and its Express
            framework to create web servers, APIs and modern web applications.
            This combination of technologies has allowed me to have a broad
            vision in terms of backend development, which has allowed me to
            tackle different types of projects effectively.
          </p>
          <br />
          <p>
            In my work experience, I have worked with relational databases like
            MySQL, implementing efficient data models and optimized queries for
            better performance.
          </p>
          <br />
          <p>
            In short, as a junior web developer, I have extensive experience in
            backend development using technologies like PHP, Laravel 9+,
            Node.js, Express, and MySQL. I am always in constant learning,
            looking for new ways to improve my skills and apply them in the
            development of successful web projects.
          </p>
        </ModalInfoStack>
      </div>
    </div>
  );
}
