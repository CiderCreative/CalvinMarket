import React from "react";
import Link from "next/link";
import { Logo } from "../../components/Global/index";
import { EyeIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-4">
      {/* Fixed div */}
      <div className="fixed left-0 inset-y-0 w-1/5 antialiased bg-dark">
        <Logo />

        <div>
          <h5 className="text-sm text-center text-yellow">2023 Fall</h5>
          <div className="bg-light/10 w-full h-[1px] my-3" />

          {/* Fall 2023 */}
          <Link
            href="/About"
            className="flex w-3/5 justify-center py-5 rounded-xl m-auto hover:bg-neutral-700/50"
          >
            <EyeIcon className="h-6 w-6" />
            <p className="px-5">Overview</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
