"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

const ExitItem = ({fromRoute}) => {
  const Router = useRouter(); //Go back to previous link

  return (
    // Opens "from" link
    <div onClick={() => Router.back()} className="flex items-center justify-center aspect-square w-[50px] bg-light-gray rounded-full hover:opacity-70 transition-colors duration-200">
      <svg className="w-6 h-6 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg>
    </div>
  )
}

export default ExitItem