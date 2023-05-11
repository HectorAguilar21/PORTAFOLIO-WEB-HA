import React from "react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Projects } from "../../data/Data";
import scrollAnimation from "../../../assets/img/Animation/arrow-down.json";
import IndexPresupesto from "../../../assets/img/Projects/Presupuesto_app/imgPage/index.webp";
import OpcionPresupuesto from "../../../assets/img/Projects/Presupuesto_app/imgPage/presupuestpapp-opcionpresupuesto.webp";
import OpcionCuentas from "../../../assets/img/Projects/Presupuesto_app/imgPage/presupuestpapp-opcioncuentas.webp";

export default function PresupuestoAppPage() {
  const [proyecto, setProyecto] = useState({});
  const [loadingProyecto, setLoadingProyecto] = useState(true);

  useEffect(() => {
    const proyecto = Projects.find(
      (project) => project.title === "Presupuesto App"
    );
    setProyecto(proyecto);
    setLoadingProyecto(false);
  }, []);

  const scrollOptions = {
    loop: true,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay, duration }) => ({
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration,
      },
    }),
    slide: {
      x: -1300,
    },
    slideComplete: ({ delay, duration }) => ({
      x: 0,
      transition: {
        type: "spring",
        delay,
        ease: easeInOut,
        duration,
      },
    }),
  };

  const [optionSelected, setOptionSelected] = useState("");

  const handleOptionPresupuesto = () => {
    setOptionSelected("presupuesto");
  };

  const handleOptionCuentas = () => {
    setOptionSelected("cuentas");
  };

  function Content(optionSelected) {
    switch (optionSelected) {
      case "presupuesto":
        return (
          <>
            <h2 className="font-SofiaSansCondensed text-center text-amber-300 uppercase font-semibold sTMINI:text-4xl sCXS:text-2xl sMINI:text-xl pb-5">
              "Definir Presupuesto"
            </h2>
            <img
              className="w-full m-auto"
              src={OpcionPresupuesto}
              alt="imagen de la pagina principal de la aplicacion"
            />
          </>
        );
      case "cuentas":
        return (
          <>
            <h2 className="font-SofiaSansCondensed text-center text-amber-300 uppercase font-semibold text-4xl pb-5">
              "Gestionar Cuentas"
            </h2>
            <img
              className="w-full m-auto"
              src={OpcionCuentas}
              alt="imagen de la pagina principal de la aplicacion"
            />
          </>
        );
      default:
        return (
          <h1 className="text-center w-full text-white text-2xl font-semibold">
            Selecciona una opcion
          </h1>
        );
    }
  }

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
    <div className="overflow-auto">
      <motion.h1
        className="font-Alkatra text-center font-light text-amber-400 sFHD:text-5xl sHD:text-3xl sTPRO:text-4xl sTMINI:text-3xl sCXS:text-2xl sMINI:text-xl pt-4"
        initial="hidden"
        animate="visible"
        custom={{ delay: 0.5, duration: 0.75 }}
        variants={variants}
      >
        Finanzas para todos
      </motion.h1>
      <section className="flex w-full p-10 items-center sHD:flex-row sMINI:flex-col">
        <div className="sHD:w-1/2 flex flex-col items-end">
          <motion.img
            className="sHD:w-5/6 sTMINI:w-4/6 sHD:mr-5 shadow-2xl shadow-black rounded-md border-cyan-500 border-2 max-sHD:m-auto"
            src={IndexPresupesto}
            alt="imagen de la pagina principal de la aplicacion"
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.75, duration: 1.5 }}
            variants={variants}
          />
          <motion.div
            className="font-SourceSansPro sHD:w-5/6 sTMINI:w-4/6 flex flex-wrap gap-y-2 gap-x-1 justify-evenly text-slate-100  uppercase font-semibold sFHD:py-10 sTMINI:py-5 sFHD:text-2xl sHD:text-lg max-sTMINI:pb-5 max-sTMINI:pt-5 sHD:mr-5 max-sHD:m-auto"
            initial="hidden"
            animate="visible"
            custom={{ delay: 1.75 }}
            variants={variants}
          >
            <a
              className={`rounded-3xl sT:w-48 sTMINI:w-36 sMINI:w-28 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 sCXS:p-1 sMINI:p-0
                  bg-indigo-600 hover:bg-indigo-700`}
              href={proyecto.github}
              target="_blank"
            >
              Github
            </a>
            <a
              className={`rounded-3xl sT:w-48 sTMINI:w-36 sMINI:w-28 text-center transition-all ease-in-out duration-300 shadow-xl sFHD:p-3 sCXS:p-1 sMINI:p-0 bg-indigo-600 hover:bg-indigo-700`}
              href={proyecto.page}
              target="_blank"
            >
              Pagina
            </a>
          </motion.div>
        </div>
        <div className="sHD:w-1/2 overflow-hidden">
          <motion.p
            className="font-SofiaSansCondensed sHD:w-5/6 sHD:ml-5 text-center sFHD:text-2xl sHD:text-base sTPRO:text-base sTMINI:text-sm sMINI:text-xs text-zinc-300 font-medium max-sHD:m-auto max-sHD:pt-10"
            initial="slide"
            animate="slideComplete"
            custom={{ delay: 1.25, duration: 1.25 }}
            variants={variants}
          >
            "La aplicación web de presupuesto permite a los usuarios administrar
            sus finanzas personales de manera fácil y efectiva. La página
            principal ofrece dos opciones: "Presupuesto" y "Cuentas". Con la
            opción "Presupuesto", los usuarios pueden fijar un monto máximo
            disponible y agregar gastos a medida que los realizan, lo que les
            ayuda a mantenerse dentro de su presupuesto. Con la opción
            "Cuentas", los usuarios pueden agregar tanto ingresos como egresos,
            y también fijar un saldo inicial, ya sea positivo o negativo. En
            resumen, la aplicación ayuda a los usuarios a tener un mayor control
            y visibilidad sobre sus finanzas."
          </motion.p>
        </div>
      </section>
      <motion.div
        className="w-full flex"
        initial="hidden"
        animate="visible"
        custom={{ delay: 1.5, duration: 1.5 }}
        variants={variants}
      >
        <div className="w-1/2 flex flex-col items-center">
          <div className="m-auto sTMINI:w-28 pointer-events-none sCXS:w-20 sMINI:w-12">
            <Lottie
              options={{ animationData: scrollAnimation, ...scrollOptions }}
            />
          </div>
          <button
            className="sTMINI:w-[200px] sMINI:w-[150px] sTMINI:text-base sMINI:text-xs bg-cyan-500 rounded-md py-2 uppercase text-zinc-100 font-bold hover:bg-cyan-600 transition-colors duration-200 ease-in-out sHD:hidden"
            type="button"
            onClick={handleOptionPresupuesto}
          >
            Opcion Presupuesto
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="m-auto sTMINI:w-28 pointer-events-none sCXS:w-20 sMINI:w-12">
            <Lottie
              options={{ animationData: scrollAnimation, ...scrollOptions }}
            />
          </div>
          <button
            className="sTMINI:w-[200px] sMINI:w-[150px] sTMINI:text-base sMINI:text-xs bg-cyan-500 rounded-md py-2 uppercase text-zinc-100 font-bold hover:bg-cyan-600 transition-colors duration-200 ease-in-out sHD:hidden"
            type="button"
            onClick={handleOptionCuentas}
          >
            Opcion Cuentas
          </button>
        </div>
      </motion.div>
      <motion.section
        className="flex w-full sCXS:p-10 sMINI:p-5"
        initial="hidden"
        animate="visible"
        custom={{ delay: 2, duration: 1.5 }}
        variants={variants}
      >
        {windowWidth >= 1280 ? (
          <>
            <div className="w-1/2 border-r-4 border-dotted border-cyan-500">
              <h2 className="font-SofiaSansCondensed text-center text-amber-300 uppercase font-semibold text-4xl pb-5">
                "Definir Presupuesto"
              </h2>
              <img
                className="w-5/6 m-auto"
                src={OpcionPresupuesto}
                alt="imagen de la pagina principal de la aplicacion"
              />
            </div>

            <div className="w-1/2">
              <h2 className="font-SofiaSansCondensed text-center text-amber-300 uppercase font-semibold text-4xl pb-5">
                "Gestionar Cuentas"
              </h2>
              <img
                className="w-5/6 m-auto"
                src={OpcionCuentas}
                alt="imagen de la pagina principal de la aplicacion"
              />
            </div>
          </>
        ) : (
          <div className="w-full">
            <AnimatePresence>
              <motion.div
                key={optionSelected}
                transition={{ duration: 0.2 }}
                exit={{ y: 20, opacity: 0 }}
              >
                {optionSelected
                  ? Content(optionSelected)
                  : Content(optionSelected)}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </motion.section>
    </div>
  );
}
