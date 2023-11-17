"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { XMarkIcon } from "@heroicons/react/24/solid"

const ExitItem = () => {
  const Router = useRouter(); //Router object

  return (
    // Goes to previous link on click
    <div onClick={() => Router.back()} className="absolute top-5 left-5 z-10 flex items-center justify-center aspect-square w-11 bg-gray-accent rounded-full hover:border-2 border-opposite hover:cursor-pointer">
      <XMarkIcon className="h-7 w-7" aria-hidden="true" />
    </div>
  )
}

export default ExitItem