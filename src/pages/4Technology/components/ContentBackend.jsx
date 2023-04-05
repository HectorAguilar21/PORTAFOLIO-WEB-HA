import React from "react";
import { easeInOut, motion } from "framer-motion";
import ModalInfoStack from "./ModalInfoStack";
import { BackendList } from "../../data/Data";
import Images from "../../1Reusable components/Images";

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

  const dataModal = "backendModal";
  const titleModal = "Back-end";

  return (
    <div className="sTMINI:min-w-[525px] sHD:w-1/2 sMINI:w-full sFHD:min-h-[400px] sHDplus:min-h-[300px] sHD:min-h-[275px] sMINI:min-h-[400px] pt-[55px] px-3">
      <div className="bg-zinc-200 h-full w-full rounded-3xl relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 sTMINI:-top-10 sMINI:-top-6 z-0">
          <h1 className="title-stack text-center font-bold  text-indigo-800 bg-zinc-200 rounded-3xl sCS:py-3 sCS:px-5 sMINI:py-2 sMINI:px-2 sFHD:text-5xl sHD:text-4xl sTPRO:text-5xl sTMINI:text-3xl sMINI:text-xl">
            Back-end
          </h1>
        </div>
        <div className="flex flex-wrap justify-center sHD:pb-[45px] sMINI:pb-[60px] sFHD:pt-[45px] sHD:pt-[30px] sTPRO:pt-[35px] sMINI:pt-[30px] h-full w-full">
          {BackendList.map((item, index) => (
            <motion.div
              className={`flex flex-col justify-center items-center sFHD:w-52 sHDplus:w-44 sHD:w-40 sTPRO:w-48 sT:w-40 sTMINI:w-36 sCXS:w-32 sMINI:w-28 pb-7`}
              initial="hidden"
              animate="visible"
              custom={{ delay: (index + 1) * 0.25 }}
              variants={variants}
            >
              <div className="sFHD:h-20 sHDplus:h-12 sHD:h-9 sTPRO:h-16 sT:h-14 sTMINI:h-12 sMINI:h-10">
                <Images item={item} key={index} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 bg-indigo-700 hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out duration-500 w-full rounded-b-2xl text-white text-center text-xl py-2">
          <button
            className="title-buttons w-full"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${dataModal}`}
          >
            Keep reading
          </button>
          <ModalInfoStack infoModal={dataModal} titleModal={titleModal}>
            <p>
              I have experience in some frontend technologies and programming
              languages. My background is in using technologies like HTML, CSS,
              and JavaScript to create attractive and functional websites.
            </p>
            <br />
            <p>
              Also, I have worked with some popular tools and frameworks in the
              industry. In particular, I have used Bootstrap 5 and TailwindCSS
              to improve efficiency in developing web styles and layouts.
            </p>
            <br />
            <p>
              As for JavaScript, I have experience with React and React Router,
              which allows me to create Single Page Applications (SPAs) with
              interactive and dynamic functionalities.
            </p>
            <br />
            <p>
              I am excited to continue learning and growing in the web
              development industry, exploring new technologies and tools. I am
              always willing to work as a team and provide creative solutions to
              solve problems and overcome challenges. As a Junior web developer,
              my main focus is to continue improving my skills and gaining new
              experiences to contribute to the success of the projects in which
              I participate.
            </p>
          </ModalInfoStack>
        </div>
      </div>
    </div>
  );
}
