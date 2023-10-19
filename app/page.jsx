"use client"
import { AccountIndication, FilterButton, FilterContainer, HighlightContainer, ItemHighlight, ListingButtons, Searchbar, Settings, HomeSidebar } from "@/components/Home/index"
import { useState } from "react";

function Home({ signOut, user }) {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  return (
    <div className={`transition-all duration-300 pl-[300px] ${sidebarClosed ? "pl-[50px]" : ""}`}>
      <HomeSidebar sidebarClosed={sidebarClosed} setSidebarClosed={setSidebarClosed}/>

      <div className="flex justify-between mx-5 mt-2">
        <Searchbar />
        <div className="flex space-x-5">
          <AccountIndication userName={user}/>
          <Settings />
        </div>
      </div>

      <HighlightContainer text="Newly Added"/>
      <HighlightContainer text="Textbooks"/>
      <HighlightContainer text="Free Items"/>
    </div>
  )
}

export default Home;