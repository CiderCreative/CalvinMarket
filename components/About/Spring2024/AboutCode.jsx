import React from "react";
import Link from "next/link";
import { AboutHeader } from "./index";

const AboutCode = () => {
  const linkArray = [
    {
      text: "Our code can be found in our GitHub repository:",
      buttonText: "GitHub",
      buttonLink: "https://github.com/CiderCreative/CalvinMarket",
    },
    {
      text: "Our designs can be found in our Figma file:",
      buttonText: "Figma",
      buttonLink:
        "https://www.figma.com/file/BWSnNtOdaqMQM4U53r7Vbu/Calvin-Market?type=design&node-id=0%3A1&mode=design&t=QCtIWxFyXAZIvDkL-1",
    },
    {
      text: "Our 2024 Spring slides can be found here:",
      buttonText: "Google Slides",
      buttonLink:
        "https://docs.google.com/presentation/d/1045nQjtogtnRLSInzdVTybavk9syP6pieel7TU0hzlA/edit?usp=sharing",
    },
    {
      text: "This project is a part of Calvin University’s Computer Science program:",
      buttonText: "Calvin CS Department",
      buttonLink: "https://computing.calvin.edu",
      buttonColor: "bg-maroon",
    },
  ];

  return (
    <div>
      <AboutHeader text="Code" />

      {/* Necessary Buttons */}
      <div className="space-y-5">
        {linkArray.map((item, idx) => (
          <div
            key={idx}
            className="m-auto flex w-[80vw] max-w-[1000px] max-2xl:flex-col lg:justify-between"
          >
            <p className="text-base">{item.text}</p>
            <div className="my-5">
              <Link
                href={item.buttonLink}
                target="_blank"
                className={`rounded-xl px-4 py-3 text-base font-medium text-light duration-100 hover:opacity-70 sm:px-10 ${
                  item.buttonColor ? "bg-maroon" : "bg-dark"
                }`}
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCode;
