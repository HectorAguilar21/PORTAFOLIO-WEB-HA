import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SocialList } from "../data/Data";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Socials() {
  const location = useLocation();
  const pathName = location.pathname;

  let bgColor;

  switch (pathName) {
    case "/page/aboutme":
      bgColor = "bg-cyan-600";
      break;
    case "/page/stack":
      bgColor = "bg-indigo-600";
      break;
    case "/page/projects":
      bgColor = "bg-indigo-600";
      break;
    case "/page/contact":
      bgColor = "bg-cyan-600";
      break;
    default:
      break;
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="text-white sHD:w-36 sMINI:w-24"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.ul
        className={`flex flex-col gap-2 list-none mb-2 text-xl items-center max-sCS:gap-1 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.4,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(99% 50% 1% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {SocialList.map((item) => (
          <motion.li
            className={`p-2 rounded-full h-16 w-16 flex justify-center items-center max-sCS:h-9 max-sCS:w-9 ${bgColor}`}
            variants={itemVariants}
          >
            <a href={item.path} target="_blank">
              <div>
                <img className="h-7 m-auto" src={item.icon} alt={item.title} />
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        className="m-auto flex flex-col justify-center items-center w-22 sHD:h-22 font-bold rounded-full sTMINI:text-base sMINI:text-xs "
        whileTap={{ scale: 0.75 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          variants={{
            open: { rotate: 0 },
            closed: { rotate: 180 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path className="fill-cyan-400" d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
        Socials
      </motion.button>
    </motion.nav>
  );
}
