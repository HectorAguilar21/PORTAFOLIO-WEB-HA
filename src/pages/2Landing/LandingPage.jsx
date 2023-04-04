import React from "react";
import { useEffect, useState } from "react";
import Loading from "../1Reusable components/Loading";
import Cover from "./views/Cover";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="landing-page flex w-screen h-screen bg-fixed overflow-auto bg-cyan-700">
      {loading ? <Loading /> : <Cover />}
    </div>
  );
}
