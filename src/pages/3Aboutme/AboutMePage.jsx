import React from "react";
import ContainerInformation from "./views/ContainerInformation";
import BgMeteorIndigo from "../../assets/img/BackGround/Meteor.svg";

export default function AboutMePage() {
  return (
    <div
      className="landing-page w-screen h-screen"
      style={{ backgroundImage: `url(${BgMeteorIndigo})` }}
    >
      <ContainerInformation />
    </div>
  );
}
