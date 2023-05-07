import React from "react";
import ContainerInformation from "./views/ContainerInformation";
import BgMeteorIndigo from "../../assets/img/BackGround/Meteor.svg";

export default function AboutMePage() {
  return (
    <div
      className="aboutme-page w-screen h-screen bg-fixed bg-cover bg-no-repeat transition-none"
      style={{ backgroundImage: `url(${BgMeteorIndigo})` }}
    >
      <ContainerInformation />
    </div>
  );
}
