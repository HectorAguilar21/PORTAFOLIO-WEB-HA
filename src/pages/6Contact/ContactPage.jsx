import React from "react";
import ContainerContact from "./views/ContainerContact";
import BgMeteorIndigo from "../../assets/img/BackGround/Meteor.svg";

export default function ContactPage() {
  return (
    <div
      className="contact-page w-screen h-screen overflow-auto flex items-center relative"
      style={{ backgroundImage: `url(${BgMeteorIndigo})` }}
    >
      <ContainerContact />
    </div>
  );
}
