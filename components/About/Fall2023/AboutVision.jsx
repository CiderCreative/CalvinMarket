import React from "react";
import { AboutHeader } from "./index";

const AboutVision = () => {
  return (
    <div>
      {/* Header & divider */}
      <AboutHeader text="Vision" />

      <div className="flex max-xl:flex-col max-xl:space-y-8 items-center xl:space-x-40 text-base font-normal">
        <div className="space-y-8 xl:space-y-5 max-lg:w-[85vw] max-w-[500px]">
          <p>
            We’ve observed that college students need to purchase many items,
            but not all of them need to be new. Additionally, many of the items
            you need in college are unneeded before college as well as unneeded
            after college. You just need them while you’re at college.
          </p>
          <p>
            Enter Calvin Market – a web application designed specifically for
            our campus community. This platform is a marketplace for students to
            buy, sell, and give away items conveniently and sustainably.
          </p>
        </div>
        <p className="max-lg:w-[85vw] xl:max-2xl:max-w-[350px] max-w-[500px]">
          With an emphasis on campus-centric transactions, Calvin Market
          eliminates the need for transportation and fosters a closer community
          spirit. The intuitive user interface, coupled with a secure login
          system using Calvin email addresses, ensures a trustworthy and
          user-friendly experience. Through this app, we envision an ecosystem
          where students can save money, resell items, and form meaningful
          connections. Calvin Market isn’t just a project; it’s a step toward a
          more cohesive, supportive, and sustainable student community.
        </p>
      </div>
    </div>
  );
};

export default AboutVision;
