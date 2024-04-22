"use client";

import React from "react";
import Sidebar from "../../../components/About/Sidebar";
import { Foreground } from "../../../components/About/Spring2024";

const page = () => {
  return (
    <div className="relative overflow-x-hidden bg-dark text-light">
      <Sidebar />
      <Foreground />
    </div>
  );
};

export default page;
