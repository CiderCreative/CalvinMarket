import React from "react";
import { AboutHeader } from "./index";

const AboutVision = () => {
  return (
    <div>
      {/* Header & divider */}
      <AboutHeader text="Vision" />

      <div className="flex items-center text-base font-normal max-xl:flex-col max-xl:space-y-8 xl:space-x-40">
        <div className="max-w-[500px] space-y-8 max-lg:w-[85vw] xl:space-y-5">
          <p>
            We’ve observed that college students need to purchase many items,
            but not all of them need to be new. Additionally, many of the items
            you need in college are unneeded before college as well as unneeded
            after college. You just need them while you’re at college.
          </p>
          <p>
            Enter Calvin Market – a web application designed specifically for
            our Calvin community. This platform is a marketplace for students to
            buy, sell, and give away items conveniently and sustainably.
          </p>
        </div>
        <p className="max-w-[500px] max-lg:w-[85vw] xl:max-2xl:max-w-[350px]">
          With an emphasis on campus-centric transactions, Calvin Market reduces
          the need for transportation and fosters a closer community spirit. The
          intuitive user interface, coupled with a secure login system using
          Calvin email addresses, ensures a trustworthy and user-friendly
          experience. Through this app, we envision an ecosystem where students
          can save money, resell items, and form meaningful connections. Calvin
          Market isn’t just a project; it’s a step toward a more connected,
          supportive, and sustainable student community.
        </p>
      </div>
    </div>
  );
};

export default AboutVision;
