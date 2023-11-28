"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { XMarkIcon } from "@heroicons/react/24/solid";

const ExitItem = () => {
  const router = useRouter(); // router object

  // Listen for Escape click
  useEffect(() => {
    const handleKeyDown = (event) => {if (event.key === 'Escape') { router.back(); } };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div onClick={() => router.back()} className="absolute top-5 left-5 z-10 flex items-center justify-center aspect-square w-11 bg-gray-accent rounded-full hover:border-2 border-opposite hover:cursor-pointer">
      <XMarkIcon className="h-7 w-7" aria-hidden="true" />
    </div>
  );
};

export default ExitItem;
