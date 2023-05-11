import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAboutMe from "./IntroAboutMe";
import ContentProfessional from "../components/ContentProfessional";
import ContentHobbies from "../components/ContentHobbies";
import ContentPersonal from "../components/ContentPersonal";
import ContentStudies from "../components/ContentStudies";
import { ContentTitle } from "../../data/Data";

export default function ContainerInformation() {
  const [selectedTab, setSelectedTab] = useState("");

  function Content(selectedTab) {
    switch (selectedTab) {
      case "Profesional":
        return <ContentProfessional />;
      case "Estudios":
        return <ContentStudies />;
      case "Hobby":
        return <ContentHobbies />;
      case "Personal":
        return <ContentPersonal />;
      default:
        return <IntroAboutMe />;
    }
  }

  return (
    <div className="h-full flex justify-center sTMINI:pt-10 sMINI:pt-4">
      <div className="sMINI:h-11/12 w-10/12 bg-slate-700 bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl">
        <nav className="font-SourceSansPro text-white sTMINI:font-semibold pb-3 sHD:text-2xl sTPRO:text-xl sTMINI:text-base sCS:text-base sMINI:text-sm max-sTMINI:text-center">
          <ul className="flex justify-around pt-2">
            {ContentTitle.map((item) => (
              <motion.li
                className={`relative w-full flex justify-center cursor-pointer pt-2 bg-opacity-30 rounded-tl-2xl rounded-tr-2xl ${
                  item === selectedTab ? "bg-cyan-700" : ""
                }`}
                key={item.label}
                initial={{ scale: 0 }}
                transition={{ type: "spring" }}
                animate={{ scale: 1 }}
                onClick={() => setSelectedTab(item)}
              >
                <p className="max-sTMINI:flex flex-col">
                  {item.icon}
                  <span>{item.label}</span>
                </p>
                {item === selectedTab ? (
                  <motion.div
                    className="absolute left-0 right-0 h-1 bg-indigo-600 sHD:top-10 sTPRO:top-9 sTMINI:top-8 sCS:top-14 sMINI:top-12"
                    layoutId="underline"
                  />
                ) : null}
              </motion.li>
            ))}
          </ul>
        </nav>
        <AnimatePresence>
          <motion.main
            className="font-SourceSansPro flex sMINI:items-center max-sFHD:pb-3 h-[91%]"
            key={selectedTab ? selectedTab.label : "empty"}
            transition={{ duration: 0.2 }}
            exit={{ x: -20, opacity: 0 }}
          >
            {selectedTab ? Content(selectedTab.label) : Content(selectedTab)}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
