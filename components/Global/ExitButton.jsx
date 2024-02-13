"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ExitItem = () => {
  const router = useRouter(); // router object

  // Listen for Escape click
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        router.back();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div
      onClick={() => router.back()}
      className="absolute left-5 top-5 z-10 flex aspect-square w-11 items-center justify-center
      rounded-full border-opposite bg-gray hover:cursor-pointer hover:border-2 dark:border-light dark:bg-darkGray"
    >
      <XMarkIcon className="h-7 w-7" aria-hidden="true" />
    </div>
  );
};

export default ExitItem;
