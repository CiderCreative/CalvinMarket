import React from 'react'
import { ButtonLink } from "@/components/Home/index"

const ListingButtons = () => {
  return (
    <div className="flex flex-col justify-center ml-[10%] w-[80%] space-y-3">
      <ButtonLink text="Create a listing" link="/EditListing" styles="bg-[#20202030] hover:opacity-80" />
      <ButtonLink text="Edit listings"    link="/EditListing" styles="border-2 border-opposite hover:bg-[#20202010]" />
    </div>
  )
}

export default ListingButtons