import React from "react";
import { BackendList, FrontendList } from "../../data/Data";

export default function Filter({ selectedTech, setSelectedTech }) {
  return (
    <div className="fixed-top top-5 flex justify-center">
      <div className="bg-white py-2 px-10 rounded-full shadow-md shadow-slate-800">
        <label className="title-nav text-xl" htmlFor="tech">
          Filter by technology:
        </label>
        <select
          className="ml-10"
          id="tech"
          value={selectedTech}
          onChange={(event) => setSelectedTech(event.target.value)}
        >
          <option className="text-center" value="">
            All
          </option>
          {FrontendList.map((itemF) => (
            <option className="capitalize text-center" value={itemF.title}>
              {itemF.title}
            </option>
          ))}
          {BackendList.map((itemB) => (
            <option className="capitalize text-center" value={itemB.title}>
              {itemB.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
