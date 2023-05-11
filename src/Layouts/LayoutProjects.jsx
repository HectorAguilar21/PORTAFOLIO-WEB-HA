import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import Loading from "../pages/1Reusable components/Loading";
import LogoFC from "../assets/img/Logo/Isotipo/SVG/isotipoB.svg";
import { DirectionList, Projects } from "../pages/data/Data";
import SocialNetworks from "../pages/1Reusable components/SocialNetworks";
import FormContact from "../pages/1Reusable components/FormContact";

export default function LayoutProjects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const location = useLocation();
  const pathName = location.pathname;

  const variants = {
    hidden: {
      opacity: 0,
      scale: 1.4,
    },
    visible: ({ delay, duration }) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration,
      },
    }),
  };

  return (
    <div
      className={`h-screen w-screen ${Projects.map((project) =>
        project.path === pathName
          ? project.id % 2 === 0
            ? "bg-indigo-700"
            : "bg-cyan-700"
          : ""
      ).join(" ")} overflow-x-hidden`}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <nav className="sFHD:h-[60px] sHD:h-[40px] sTPRO:h-[60px] sTMINI:h-[50px] sMINI:h-[40px] bg-slate-700 flex items-center justify-center sHD:gap-x-56 sTPRO:gap-x-40 sTMINI:gap-x-32 sMINI:gap-x-20">
            <Link to={"/"}>
              <motion.img
                className="sFHD:h-[50px] sHD:h-[30px] sTPRO:h-[50px] sTMINI:h-[40px] sMINI:h-[30px]"
                src={LogoFC}
                alt="Logo Hector Aguilar"
                initial="hidden"
                animate="visible"
                custom={{ delay: 2 }}
                variants={variants}
              />
            </Link>
            <ul className="flex h-full">
              {DirectionList.map((item, index) => (
                <Link
                  to={item.path}
                  className="text-white uppercase font-semibold sHD:w-[125px] sTPRO:w-[100px] sTMINI:w-[80px] sMINI:w-[35px] flex items-center justify-center text-xs hover:bg-amber-500 transition-all duration-200 ease-in-out"
                  title={item.title}
                  key={index}
                >
                  <motion.li
                    className=""
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: (index + 1) * 0.25 + 2 }}
                    variants={variants}
                  >
                    <img
                      className="m-auto sTPROplus:h-7 sTPRO:h-6 sTMINI:h-5 max-sTMINI:h-4"
                      src={item.icon}
                      alt={item.title}
                    />
                  </motion.li>
                </Link>
              ))}
            </ul>
          </nav>

          <Outlet />
          <footer className="text-white bg-slate-600 flex sHD:flex-row sMINI:flex-col max-sHD:pt-5">
            <div className="sHD:w-1/2">
              <SocialNetworks />
            </div>
            <motion.div
              className="sHD:w-1/2 sFHD:px-48 sHD:px-32 sTMINI:px-24 py-5 sMINI:px-10"
              initial="hidden"
              animate="visible"
              custom={{ delay: 3.5 }}
              variants={variants}
            >
              <FormContact />
            </motion.div>
          </footer>
        </>
      )}
    </div>
  );
}
