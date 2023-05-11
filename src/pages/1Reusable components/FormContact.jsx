import React from "react";
import { useRef, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export default function FormContact() {
  const refForm = useRef();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_cyrtl1o";
    const templateId = "template_xlbb9gw";
    const apiKey = "00ZrwvP8A9Ebgp7tF";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        setUserName("");
        setEmail("");
        setMessage("");

        swal({
          title: "Success",
          text: "Email sent successfully",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => console.error(err));
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
  };

  return (
    <div className="h-full w-full flex flex-col justify-center">
      <form ref={refForm} onSubmit={handleSubmit}>
        <motion.div
          className="sTMINI:py-3 sCXS:py-2 sCS:py-1 "
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.5, duration: 0.75 }}
          variants={variants}
        >
          <label
            className="font-SourceSansPro block text-white sTMINI:text-2xl sCXS:text-xl sCS:text-lg"
            htmlFor="username"
          >
            Name
          </label>
          <input
            id="username"
            className="font-SourceSansPro bg-transparent border-b-2 rounded-md w-full border-cyan-500 p-2 sTMINI:text-xl sCXS:text-lg sCS:text-base"
            type="text"
            name="username"
            placeholder="Example: Juan Aguilar"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </motion.div>
        <motion.div
          className="sTMINI:py-3 sCXS:py-2 sCS:py-1 "
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.75, duration: 0.75 }}
          variants={variants}
        >
          <label
            className="font-SourceSansPro block text-white sTMINI:text-2xl sCXS:text-xl sCS:text-lg"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            className="font-SourceSansPro bg-transparent border-b-2 rounded-md w-full border-cyan-500 p-2 sTMINI:text-xl sCXS:text-lg sCS:text-base"
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </motion.div>
        <motion.div
          className="sTMINI:py-3 sCXS:py-2 sCS:py-1 "
          initial="hidden"
          animate="visible"
          custom={{ delay: 1, duration: 0.75 }}
          variants={variants}
        >
          <label
            className="font-SourceSansPro block text-white sTMINI:text-2xl sCXS:text-xl sCS:text-lg"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="font-SourceSansPro bg-transparent border-2 rounded-md w-full border-cyan-500 p-2 sTMINI:text-xl sCXS:text-lg sCS:text-base"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </motion.div>
        <motion.div
          className="flex w-full justify-center"
          initial="hidden"
          animate="visible"
          custom={{ delay: 1.25, duration: 2 }}
          variants={variants}
        >
          <button
            href="#"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-cyan-600 transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 bg-white group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-cyan-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Send message
            </span>
          </button>
        </motion.div>
      </form>
    </div>
  );
}
