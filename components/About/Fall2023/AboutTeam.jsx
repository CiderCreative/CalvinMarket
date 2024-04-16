import React from "react";
import Image from "next/image";
import { AboutHeader } from "./index";
import { BradenIcon, LoganIcon } from "../../../public/About/index.js";

const AboutTeam = () => {
  return (
    <div>
      {/* Header & divider */}
      <AboutHeader text="Team" />

      <div className="flex items-center max-xl:flex-col max-xl:space-y-20 xl:space-x-10 2xl:space-x-40">
        {/* Braden's Description */}
        <div className="max-w-[500px] space-y-5 max-lg:w-[85vw]">
          <Image
            src={BradenIcon}
            alt=""
            className="aspect-square w-20"
            draggable={false}
          />
          <h3 className="text-2xl font-bold">Braden Lint</h3>
          <p className="text-base font-normal">
            As the Backend Developer for the Calvin Market project, Lint took
            control of the technical infrastructure. He configured a robust
            serverless hosting solution, designed and managed sophisticated
            databases, and developed efficient APIs utilizing a sophisticated
            stack involving Next.js, AWS, and SST.
          </p>
        </div>

        {/* Logan's Description */}
        <div className="max-w-[500px] space-y-5 max-lg:w-[85vw]">
          <Image
            src={LoganIcon}
            alt=""
            className="aspect-square w-20"
            draggable={false}
          />
          <h3 className="text-2xl font-bold">Logan Humphrey</h3>
          <p className="text-base font-normal">
            As Designer and Frontend Developer for the Calvin Market project,
            Humphrey took control over the visuals of the project. He crafted
            the full UI design in Figma, then translated design concepts into
            dynamic and responsive React/Next.js code with Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
