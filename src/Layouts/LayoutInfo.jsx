import React from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../pages/1Reusable components/Loading";
import Navigation from "../pages/1Reusable components/Navigation";
import Socials from "../pages/1Reusable components/Socials";

export default function LayoutInfo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`layout-info relative h-screen w-screen overflow-hidden bg-indigo-700 transition-all ease-in-out duration-1000`}
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
