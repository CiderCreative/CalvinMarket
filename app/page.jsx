"use client"
import { AccountIndication, FilterButton, FilterContainer, HighlightContainer, ItemHighlight, ListingButtons, Searchbar, Settings, HomeSidebar } from "@/components/Home/index"
import { useState, useEffect } from "react";

function Home({ user }) {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems =  () => {
      fetch("/api/get-items", {
        method: "POST",
        body: JSON.stringify({
          "filter": "status = for_sale"
        }),
      })
      .then((res) => res.json())
      .then((data) => setItems(data.Items))
    }

    getItems();
  },[])

  return (
    <div className={`transition-all duration-300 overflow-x-hidden m-auto sm:pl-[300px] ${sidebarClosed ? "sm:pl-[50px]" : ""}`}>
      <HomeSidebar sidebarClosed={sidebarClosed} setSidebarClosed={setSidebarClosed}/>

      <div className="flex justify-between mx-10 mt-3">
        <Searchbar />
        <div className="flex space-x-5">
          <AccountIndication userName={user}/>
          <Settings />
        </div>
      </div>

      <HighlightContainer text="Newly Added" data={items}/>
      <HighlightContainer text="Textbooks"   data={items}/>
      <HighlightContainer text="Free Items"  data={items}/>
    </div>
  )
}

export default Home;