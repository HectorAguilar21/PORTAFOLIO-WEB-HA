import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { DirectionList } from "../data/Data";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Navigation() {
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
      bgColor = "bg-cyan-600";

      break;
    case "/page/contact":
      bgColor = "bg-indigo-600";

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
        className={`flex flex-col list-none mb-2 text-xl items-center sTMINI:gap-3 sMINI:gap-1 ${
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
        {DirectionList.map(
          (item) =>
            item.path !== pathName && (
              <motion.li
                className={`p-2 font-medium  rounded-full flex justify-center items-center ${bgColor} sTPROplus:h-24 sTPROplus:w-24 sTPRO:h-20 sTPRO:w-20 sTMINI:h-16 sTMINI:w-16 sCS:h-16 sCS:w-16 sMINI:h-10 sMINI:w-10 `}
                variants={itemVariants}
              >
                <Link to={item.path}>
                  <div>
                    <img
                      className="m-auto sTPROplus:h-7 sTPRO:h-6 sTMINI:h-5 max-sTMINI:h-8"
                      src={item.icon}
                      alt={item.title}
                    />
                    <p className="m-auto sTPROplus:text-xl sT:text-sm sMINI:text-xs max-sTMINI:hidden">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </motion.li>
            )
        )}
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
        Where to?
      </motion.button>
    </motion.nav>
  );
}
