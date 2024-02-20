import React from "react";

const AboutHeader = ({ text }) => {
  return (
    <div className="flex flex-col max-xl:mt-20">
      <h2 className="text-3xl font-bold max-xl:text-center">{text}</h2>
      <div className="bg-dark/20 w-full h-[1px] mt-5 mb-10" />
    </div>
  );
};

export default AboutHeader;
