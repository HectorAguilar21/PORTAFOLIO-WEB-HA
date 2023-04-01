import React from "react";
import { easeInOut, motion } from "framer-motion";
import Images from "../../1Reusable components/Images";
import ModalInfoStack from "./ModalInfoStack";
import { ToolsList } from "../../data/Data";

export default function ContentTools() {
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

  const dataModal = "toolsModal";
  const titleModal = "Tools";

  return (
    <div className="relative rounded-3xl bg-zinc-200 sHD:h-full shadow-2xl shadow-black col-span-2 sHD:w-4/6 sHD:m-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 sTMINI:-top-10 sMINI:-top-6">
        <h1 className="title-stack text-center text-5xl font-bold pt-3 text-indigo-800 bg-zinc-200 rounded-3xl sMINI:py-3 sMINI:px-5 sT:text-5xl sTMINI:text-3xl sMINI:text-xl">
          Tools
        </h1>
      </div>

      <div className="h-full flex justify-evenly gap-y-5 items-center flex-wrap w-full sFHD:pt-14 sHD:pt-7 sTMINI:pt-14 sTMINI:pb-20 sMINI:pt-10 sMINI:pb-10">
        {ToolsList.map((item, index) => (
          <motion.div
            className="flex flex-col items-center sFHD:w-44 sHD:w-28 sTPRO:w-56 sT:w-44 sTMINI:w-32 sMINI:w-24"
            initial="hidden"
            animate="visible"
            custom={{ delay: (index + 1) * 0.25 + 1.5 }}
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
            I have experience in some frontend technologies and programming
            languages. My background is in using technologies like HTML, CSS,
            and JavaScript to create attractive and functional websites.
          </p>
          <br />
          <p>
            Also, I have worked with some popular tools and frameworks in the
            industry. In particular, I have used Bootstrap 5 and TailwindCSS to
            improve efficiency in developing web styles and layouts.
          </p>
          <br />
          <p>
            As for JavaScript, I have experience with React and React Router,
            which allows me to create Single Page Applications (SPAs) with
            interactive and dynamic functionalities.
          </p>
          <br />
          <p>
            I am excited to continue learning and growing in the web development
            industry, exploring new technologies and tools. I am always willing
            to work as a team and provide creative solutions to solve problems
            and overcome challenges. As a Junior web developer, my main focus is
            to continue improving my skills and gaining new experiences to
            contribute to the success of the projects in which I participate.
          </p>
        </ModalInfoStack>
      </div>
    </div>
  );
}
