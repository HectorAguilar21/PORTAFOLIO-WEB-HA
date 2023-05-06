import React from "react";
import ContainerStackInformation from "./views/ContainerStackInformation";
import BgMeteorCyan from "../../assets/img/BackGround/Meteor2.svg";

export default function TechnologyStackPage() {
  return (
    <div
      className="Technology-page w-screen h-screen overflow-auto"
      style={{ backgroundImage: `url(${BgMeteorCyan})` }}
    >
      <ContainerStackInformation />
    </div>
  );
}
