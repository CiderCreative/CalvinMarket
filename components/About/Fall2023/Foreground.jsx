import React from "react";
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
    <div className="bottom-4 top-4 mb-4 ml-4 flex h-auto flex-col items-center overflow-clip rounded-l-xl bg-light pb-40 pt-12 text-dark xl:ml-[250px] 2xl:ml-[400px]">
      {/* Title of Page */}
      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-bold">Overview of Fall 2023</h1>
        <p className="text-base font-normal">Calvin Market - 2023/2024</p>
      </div>

      {/* Content Sections */}
      <div className="w-[800px] space-y-20 xl:space-y-40 2xl:w-[1100px]">
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
