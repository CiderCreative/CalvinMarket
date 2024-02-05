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
    <div className="bg-light text-dark overflow-clip flex flex-col items-center ml-4 xl:ml-[250px] 2xl:ml-[400px] h-auto top-4 bottom-4 rounded-l-xl pt-12 pb-40 mb-4">
      {/* Title of Page */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-base font-normal">Calvin Market - 2023/2024</p>
      </div>

      {/* Content Sections */}
      <div className="space-y-20 xl:space-y-40 w-[800px] 2xl:w-[1100px]">
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
