import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function Card({ image, setOptionSelected }) {
  const handleImage = () => {
    setOptionSelected(image);
  };
  return (
    <div className="sHD:w-[500px] sTPRO:w-[350px]">
      <motion.img
        className="shadow-2xl shadow-black rounded-md border-cyan-500 border-2 hover:border-indigo-500 transition-colors duration-200 ease-in-out cursor-pointer"
        src={image.image.image}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={handleImage}
        layoutId={`card-${image.title}`}
      />
    </div>
  );
}
