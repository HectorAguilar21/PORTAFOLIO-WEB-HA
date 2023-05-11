import React from "react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import Loading from "../pages/1Reusable components/Loading";
import Navigation from "../pages/1Reusable components/Navigation";
import Socials from "../pages/1Reusable components/Socials";
import BgMeteorIndigo from "../assets/img/BackGround/Meteor.svg";
import BgMeteorCyan from "../assets/img/BackGround/Meteor2.svg";

export default function LayoutInfo() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const pathName = location.pathname;

  let bgColor;

  switch (pathName) {
    case "/page/aboutme":
      bgColor = BgMeteorIndigo;
      break;
    case "/page/stack":
      bgColor = BgMeteorCyan;
      break;
    case "/page/projects":
      bgColor = BgMeteorCyan;
      break;
    case "/page/contact":
      bgColor = BgMeteorIndigo;
      break;
    default:
      break;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        ease: easeInOut,
        type: "spring",
        duration: 1,
      },
    }),
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div
      className={`layout-info relative h-screen w-screen overflow-hidden`}
      style={{ backgroundImage: `url(${bgColor})` }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="absolute sTMINI:bottom-10 sMINI:bottom-5 sHD:left-3 sMINI:left-0 z-10">
            <Navigation />
          </div>
          <div className="absolute sTMINI:bottom-10 sHD:right-3 sMINI:bottom-5 sMINI:right-0 z-10">
            <Socials />
          </div>
          <motion.a
            className={`absolute bg-white sT:top-[10px] sMINI:top-[5px] left-0 uppercase font-bold title-buttons sT:text-xl sMINI:text-base px-3 sTMINI:py-1 sMINI:py-[2px] rounded-tr-3xl rounded-br-3xl z-10 flex gap-2 items-center ${
              pathName === "/page/projects" && "sMINI:top-[55px]"
            }`}
            href="../../../assets/pdf/CV Hector Aguilar.pdf"
            initial="hidden"
            animate="visible"
            custom={{ delay: 3 }}
            variants={variants}
            download
          >
            {pathName === "/page/projects" && windowWidth < 768 ? (
              <>
                <span>CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
              </>
            ) : (
              "Descargar CV"
            )}
          </motion.a>
          <Outlet />
        </>
      )}
    </div>
  );
}
