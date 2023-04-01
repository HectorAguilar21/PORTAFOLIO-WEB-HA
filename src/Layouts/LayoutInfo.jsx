import React from "react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../pages/1Reusable components/Loading";
import Navigation from "../pages/1Reusable components/Navigation";
import Socials from "../pages/1Reusable components/Socials";

export default function LayoutInfo() {
  const location = useLocation();
  const pathName = location.pathname;

  let bgColor;

  switch (pathName) {
    case "/page/aboutme":
      bgColor = "bg-indigo-700";
      break;
    case "/page/stack":
      bgColor = "technology-page-background";
      break;
    case "/page/projects":
      bgColor = "bg-indigo-700";
      break;
    case "/page/contact":
      bgColor = "contact-page-background";
      break;
    default:
      break;
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`layout-info relative h-screen w-screen overflow-hidden ${bgColor} bg-cover bg-no-repeat`}
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

          <Outlet />
        </>
      )}
    </div>
  );
}
