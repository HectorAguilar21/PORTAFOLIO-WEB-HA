import React from "react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import isotipoData from "../../../public/img/Logo/Isotipo/Animaciones/isotipoAnimacion.json";

export default function Loading() {
  const [animarChangeView, setAnimarChangeView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimarChangeView(true);
    }, 1500);
  }, []);

  const loadingOptions = {
    loop: false,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center bg-indigo-500 transition-all duration-1000 ease-in-out ${
        animarChangeView ? "opacity-0" : ""
      }`}
    >
      <div
        className={`transition-all duration-1000 ease-in-out ${
          animarChangeView ? "opacity-0 h-0" : "h-60"
        }`}
      >
        <Lottie options={{ animationData: isotipoData, ...loadingOptions }} />
      </div>
    </div>
  );
}
