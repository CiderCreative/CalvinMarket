"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const ExitItem = () => {
  const Router = useRouter(); //Router object

  return (
    // Goes to previous link on click
    <div onClick={() => Router.back()} className="mt-5 ml-5 flex items-center justify-center aspect-square w-[50px] bg-gray-accent rounded-full hover:border-2 border-opposite hover:cursor-pointer">
      <svg className="w-6 h-6 text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg>
    </div>
  )
}

export default ExitItem