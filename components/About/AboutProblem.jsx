import React from "react";
import { AboutHeader } from "./index";

const AboutProblem = () => {
  return (
    <div>
      {/* Header & divider */}
      <AboutHeader text="The Problem" />

      <div className="flex justify-center space-x-40 text-sm font-normal">
        <p className="w-[500px]">
          Attending college involves more than just tuition fees; students face
          various additional expenses like technology, textbooks, and dorm
          essentials. Many of these items, often bought new, add to the
          financial burden, yet frequently remain underused or discarded after
          college. This cycle of purchasing and discarding not only strains
          individual finances but also misses an opportunity to maintain cash
          flow within the student community. A significant portion of student
          spending, benefiting external corporations, could instead circulate
          within the campus, aiding peers financially.
        </p>

        <p className="w-[500px]">
          The solution lies in creating a campus-centric marketplace, fostering
          a community of buyers and sellers. This ecosystem encourages the use
          of second-hand items, offering affordable alternatives and helping
          students cut down on non-essential spending. Moreover, it paves the
          way for a collaborative environment, where money spent benefits fellow
          students, fosters trust among them, and strengthens community bonds.
          Implementing such a system could alleviate the financial pressures of
          higher education, promoting a sustainable and supportive student
          community.
        </p>
      </div>
    </div>
  );
};

export default AboutProblem;
