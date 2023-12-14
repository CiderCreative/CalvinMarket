"use client";
import React, { useRef, useEffect, useState } from "react";
import { Sidebar, Foreground } from "../../components/About/index.js";

const Page = () => {
  const [height, setHeight] = useState("");
  const foregroundRef = useRef("STARTING VAL");

  useEffect(() => {
    console.error("on mount:", foregroundRef);

    if (foregroundRef.current) {
      setHeight(`${foregroundRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    // Ref to calculate height of <Foreground /> (absolutely positioned)
    <div
      className="relative w-full h-[500vh] bg-dark text-light"
      style={{ height: height }}
    >
      <Sidebar />
      <Foreground childRef={foregroundRef} />
      <div className="w-full h-4 bg-dark" />
    </div>
  );
};

export default Page;
