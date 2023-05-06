import React from "react";
import { useState } from "react";

export default function ImagesDependencie({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <img
        className=" mx-auto opacity-100 sHD:h-20 sTPROplus:h-14 sTPRO:h-10 sT:h-10 sTMINI:h-10 sMINI:h-8"
        src={hovered ? item.iconC : item.icon}
        alt={item.title}
        title={item.title}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      />
      <p className="title-technology text-center font-semibold capitalize sTMINI:text-xl sCS:text-sm sMINI:text-xs ">
        {item.title}
      </p>
    </>
  );
}
