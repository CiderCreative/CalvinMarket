import React from "react";
import { AboutHeader } from "./index";

const AboutSolution = () => {
  return (
    <div>
      {/* Header & divider */}
      <AboutHeader text="The Solution" />

      <div className="flex justify-center space-x-40 text-sm font-normal">
        <div className="space-y-5 w-[500px]">
          <p>
            Calvin Market is a new web application we’re creating for Calvin
            University. It’s a platform for students to buy, sell, and trade
            items. What sets it apart from other selling sites is that it’s just
            for our college community. This makes it easier and safer to find
            what you need or sell what you don’t, right here on campus.
          </p>
          <p>
            The user interface will be created in Figma to ensure it’s both easy
            to use and good-looking. For the coding part, we’re using React,
            Next.js, and Tailwind CSS – a combo that promises a smooth and
            responsive experience whether you’re on a computer, phone, or
            tablet. Plus, for reliable hosting and managing our databases, we’re
            going with AWS and SST. This means the app won’t just be
            user-friendly; it’ll also be fast and secure.
          </p>
        </div>
        <div className="space-y-5 w-[500px]">
          <p>
            Our goal with Calvin Market is to make college life a bit easier and
            more connected. It’s not just about buying and selling; it’s about
            building a community where we help each other out. By focusing on
            the needs of Calvin students and keeping everything within our
            campus, we’re creating a convenient, cost-effective way for everyone
            to get what they need. We’re excited to see Calvin Market become a
            go-to place for student resale, saving money, and making college
            life a little better.
          </p>
          <p>
            Essentially, we wish to provide a website for buyers and sellers to
            connect, bargain, and exchange goods within the Calvin community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSolution;
