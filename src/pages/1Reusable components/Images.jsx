import React from "react";
import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import ContentModalReact from "./ContentModalReact";
import ImagesDependencie from "./ImagesDependencie";

export default function Images({ item, pathName, tech }) {
  const [hovered, setHovered] = useState(false);
  const [dataModal, setDataModal] = useState("");
  const [pathStatus, setPathStatus] = useState(true);

  useEffect(() => {
    setPathStatus(pathName !== "/page/projects");
  }, [pathName]);

  const titleModal = dataModal;

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

  return (
    <>
      <button
        className="mx-auto"
        onMouseEnter={
          pathStatus
            ? item.dependencies
              ? () => setDataModal(item.title)
              : ""
            : tech.dependencies
            ? () => setDataModal(tech.title)
            : ""
        }
      >
        <img
          className={`mx-auto opacity-100 sFHD:h-20 sHD:h-12 sTPROplus:h-12 sTPRO:h-10 sT:h-10 sTMINI:h-10 sCXSmax:h-8 sMINI:h-6 ${
            pathStatus
              ? item.dependencies
                ? "transition-transform animate-bounce cursor-pointer"
                : ""
              : tech.dependencies
              ? "transition-transform animate-bounce cursor-pointer"
              : ""
          }`}
          src={hovered ? item.iconC : item.icon}
          alt={item.title}
          title={item.title}
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#${dataModal}`}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
        {pathStatus ? (
          <p className="title-technology text-center font-semibold capitalize mx-auto sTPRO:text-xl sCXSmax:text-lg sMINI:text-base ">
            {item.title}
          </p>
        ) : null}
      </button>
      <ContentModalReact
        infoModal={dataModal}
        titleModal={titleModal}
        setDataModal={setDataModal}
      >
        {pathStatus
          ? item.title === dataModal &&
            item.dependencies &&
            item.dependencies.map((subItem, subIndex) => (
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: (subIndex + 1) * 0.25 + 0.75 }}
                variants={variants}
              >
                <ImagesDependencie
                  item={subItem}
                  key={subIndex}
                  setDataModal={setDataModal}
                />
              </motion.div>
            ))
          : tech.title === dataModal &&
            tech.dependencies &&
            tech.dependencies.map((subTech, subIndex) => (
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: (subIndex + 1) * 0.25 + 0.75 }}
                variants={variants}
              >
                <ImagesDependencie
                  item={subTech}
                  key={subIndex}
                  setDataModal={setDataModal}
                />
              </motion.div>
            ))}
      </ContentModalReact>
    </>
  );
}
