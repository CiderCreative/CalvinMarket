"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { XMarkIcon } from "@heroicons/react/24/solid"

const ExitItem = () => {
  const Router = useRouter(); //Router object


  return (
    // Goes to previous link on click
    <div onClick={() => Router.back()} className="mt-5 ml-5 flex items-center justify-center aspect-square w-10 bg-gray-accent rounded-full hover:border-2 border-opposite hover:cursor-pointer">
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </div>
  )
}

export default ExitItem