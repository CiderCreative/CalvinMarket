import React from "react";

const AboutHeader = ({ text }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">{text}</h2>
      <div className="bg-dark/20 w-full h-[1px] mt-5 mb-10" />
    </div>
  );
};

export default AboutHeader;
