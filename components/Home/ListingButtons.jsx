import React from 'react'
import { ButtonLink } from "./index"

const ListingButtons = () => {
  return (
    <div className="flex flex-col justify-center ml-[10%] w-[80%] space-y-3">
      <ButtonLink text="Create a listing" link="/EditListing" styles="bg-opposite text-opposite font-semibold" />
      <ButtonLink text="Edit listings"    link="/EditListing" styles="border-2 border-opposite" />
    </div>
  )
}

export default ListingButtons