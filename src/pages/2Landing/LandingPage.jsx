import React from "react";
import { useEffect, useState } from "react";
import Loading from "../1Reusable components/Loading";
import Cover from "./views/Cover";
import { useLocation } from "react-router-dom";

export default function LandingPage() {
  const location = useLocation();
  const pathName = location.pathname;

  let bgColor;

  switch (pathName) {
    case "/":
      bgColor = "background-cyan";
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
      className={`landing-page flex w-screen h-screen bg-fixed overflow-auto ${bgColor}`}
    >
      {loading ? <Loading /> : <Cover />}
    </div>
  );
}
