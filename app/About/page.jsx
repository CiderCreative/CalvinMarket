"use client";
import React, { useRef, useEffect, useState } from "react";
import { Sidebar, Foreground } from "../../components/About/index.js";

const Page = () => {
  const [height, setHeight] = useState("130vh");
  const foregroundRef = useRef(null);

  useEffect(() => {
    if (foregroundRef.current) {
      setHeight(`${foregroundRef.current.offsetHeight}px`);
    }
  }, []);
  return (
    <div
      className="relative w-full bg-dark text-light"
      style={{ height: height }}
    >
      <Sidebar />
      <Foreground ref={foregroundRef} />
    </div>
  );
};

export default Page;
