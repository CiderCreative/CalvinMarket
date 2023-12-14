import React, { useEffect } from "react";
import {
  AboutTeam,
  AboutVision,
  AboutCode,
  AboutProblem,
  AboutSolution,
  AboutQualifications,
} from "./index";

const Foreground = () => {
  return (
    <div className="bg-light text-dark w-4/5 h-auto top-4 bottom-4 rounded-l-xl pt-12 pb-40 px-40 mb-4 ml-auto">
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
        <AboutProblem />
        <AboutSolution />
        <AboutQualifications />
      </div>
    </div>
  );
};

export default Foreground;
