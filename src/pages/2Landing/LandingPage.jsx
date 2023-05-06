import React from "react";
import { useEffect, useState } from "react";
import Loading from "../1Reusable components/Loading";
import Cover from "./views/Cover";
import BgMeteorIndigo from "../../assets/img/BackGround/Meteor2.svg";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`landing-page flex w-screen h-screen bg-fixed overflow-auto bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${BgMeteorIndigo})` }}
    >
      {loading ? <Loading /> : <Cover />}
    </div>
  );
}
