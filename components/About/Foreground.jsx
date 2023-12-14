import React, { forwardRef } from "react";
import { AboutTeam, AboutVision, AboutCode } from "./index";

const Foreground = ({ ref }) => {
  return (
    <div
      ref={ref}
      className="bg-light text-dark w-4/5 absolute right-0 top-4 bottom-4 rounded-l-xl pt-12 pb-40 px-40"
    >
      {/* Title of Page */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-sm font-normal">Calvin Market - 2023/2024</p>
      </div>

      {/* Content Sections */}
      <div className="space-y-40 w-[1100px] m-auto">
        <AboutTeam />
        <AboutVision />
        <AboutCode />
      </div>
    </div>
  );
};

export default Foreground;
