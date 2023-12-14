"use client";
import React from "react";
import { Sidebar, Foreground } from "../../components/About/index.js";

const Page = () => {
  return (
    // Ref to calculate height of <Foreground /> (absolutely positioned)
    <div className="relative w-full bg-dark text-light">
      <Sidebar />
      <Foreground />
      <div className="w-full h-4 bg-dark" />
    </div>
  );
};

export default Page;
