"use client";
import React from "react";
import { Sidebar, Foreground } from "../../components/About/index.js";

const Page = () => {
  return (
    // Ref to calculate height of <Foreground /> (absolutely positioned)
    <div className="relative overflow-x-hidden bg-dark text-light">
      <Sidebar />
      <Foreground />
    </div>
  );
};

export default Page;
