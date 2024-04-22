import React from "react";
import Link from "next/link";
import { Logo } from "../../components/Global/index";
import { EyeIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div>
      {/* Top bar // Small Screens */}
      <div className="mb-3 pt-5 xl:hidden">
        <Logo />
        <h5 className="text-center text-base text-yellow">2023 Fall</h5>
        <div className="my-3 h-[1px] w-full bg-light/10" />

        <Link
          href="/about"
          className="m-auto flex w-3/5 justify-center rounded-xl py-5 hover:bg-neutral-700/50"
        >
          <EyeIcon className="h-6 w-6" />
          <p className="px-5">Overview</p>
        </Link>

        <h5 className="mt-10 text-center text-base text-yellow">2024 Spring</h5>
        <div className="my-3 h-[1px] w-full bg-light/10" />

        <Link
          href="/about"
          className="m-auto flex w-3/5 justify-center rounded-xl py-5 hover:bg-neutral-700/50"
        >
          <EyeIcon className="h-6 w-6" />
          <p className="px-5">Overview</p>
        </Link>
      </div>

      {/* Fixed Sidebar // Large Screens */}
      <div className="fixed inset-y-0 left-0 w-[250px] antialiased max-xl:hidden 2xl:w-[400px]">
        <Logo />

        <div>
          <h5 className="text-center text-base text-yellow">2023 Fall</h5>
          <div className="my-3 h-[1px] w-full bg-light/10" />

          <Link
            href="/about"
            className="m-auto flex w-3/5 justify-center rounded-xl py-5 hover:bg-neutral-700/50"
          >
            <EyeIcon className="h-6 w-6" />
            <p className="px-5">Overview</p>
          </Link>
        </div>

        <div className="mt-10">
          <h5 className="text-center text-base text-yellow">2024 Spring</h5>
          <div className="my-3 h-[1px] w-full bg-light/10" />

          <Link
            href="/about/spring"
            className="m-auto flex w-3/5 justify-center rounded-xl py-5 hover:bg-neutral-700/50"
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
