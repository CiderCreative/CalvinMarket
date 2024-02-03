import React from "react";
import Link from "next/link";
import { Logo } from "../../components/Global/index";
import { EyeIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div>
      {/* Top bar // Small Screens */}
      <div className="xl:hidden pt-5 mb-3">
        <Logo />
        <h5 className="text-sm text-center text-yellow">2023 Fall</h5>
        <div className="bg-light/10 w-full h-[1px] my-3" />

        <Link
          href="/About"
          className="flex w-3/5 justify-center py-5 rounded-xl m-auto hover:bg-neutral-700/50"
        >
          <EyeIcon className="h-6 w-6" />
          <p className="px-5">Overview</p>
        </Link>
      </div>

      {/* Fixed Sidebar // Large Screens */}
      <div className="max-xl:hidden fixed left-0 inset-y-0 w-[250px] 2xl:w-[400px] antialiased">
        <Logo />

        <div>
          <h5 className="text-sm text-center text-yellow">2023 Fall</h5>
          <div className="bg-light/10 w-full h-[1px] my-3" />

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
