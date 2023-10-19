"use client"
import { FilterContainer, ListingButtons} from "@/components/Home/index"
import { Logo } from "@/components/Global/index"

const HomeSidebar = ({sidebarClosed, setSidebarClosed}) => {
  const arrow = <svg className={`flex-shrink-0 transition-all duration-200 ${sidebarClosed ? "w-4 rotate-0" : "w-5 rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/></svg>

  return (
    <div className={`max-sm:hidden fixed top-0 left-0 text-primary bg-primary w-[300px] drop-shadow-xl h-full ${sidebarClosed ? "w-[30px]" : ""} transition-all duration-300 overflow-hidden`}>
      <div className="flex text-primary mt-3 mr-2 justify-end hover:cursor-pointer" onClick={() => {setSidebarClosed(!sidebarClosed)}}>{arrow}</div>
      <div className={`${sidebarClosed ? "hidden" : ""}`}>
        <Logo />
        <ListingButtons />    {/* Create & Edit Listing */}
        <FilterContainer />   {/* "School Supplies", "Electronics", etc. */}
      </div>
    </div>
  )
}

export default HomeSidebar