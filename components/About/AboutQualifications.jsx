import React from "react";
import { AboutHeader } from "./index";

const AboutQualifications = () => {
  return (
    <div>
      {/* Header & divider */}
      <AboutHeader text="Our Qualifications" />

      <div className="flex max-xl:flex-col max-xl:items-center max-xl:space-y-8 justify-center xl:space-x-40 text-sm font-normal">
        <p className="max-lg:w-[85vw] max-w-[500px]">
          Lint and Humphrey have started a website creation startup using the
          frameworks decided upon for Calvin Market. Thus, this is a great
          opportunity for them to practice skills learned with an important,
          community-serving app such as a Calvin Market web app.
        </p>
        <p className="max-lg:w-[85vw] max-w-[500px]">
          This year’s project will be considered a success if we enable students
          to buy, sell, and trade on a fully-built web app by the end of the
          2023-2024 school year.
        </p>
      </div>
    </div>
  );
};

export default AboutQualifications;
