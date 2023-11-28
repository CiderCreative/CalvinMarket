"use client"

import { AccountIndication, HighlightContainer, Searchbar, Settings, HomeSidebar } from "../components/Home/index"
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

function Home({ user}) {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [items, setItems] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const getItems =  () => {
      fetch("/api/items/get", {
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

  if( session?.user?.email ){
    return (
      <div className={`transition-all duration-100 overflow-x-hidden m-auto sm:pl-[300px] ${sidebarClosed ? "sm:pl-[50px]" : ""}`}>
        <HomeSidebar sidebarClosed={sidebarClosed} setSidebarClosed={setSidebarClosed}/>

        <div className="flex justify-between mx-10 mt-3">
          <Searchbar />
          <div className="flex space-x-5">
            <AccountIndication userName={session.user.email.split('@')[0]} />
            <Settings />
          </div>
        </div>

        <HighlightContainer text="Newly Added" data={items}/>
        <HighlightContainer text="Textbooks"   data={items}/>
        <HighlightContainer text="Free Items"  data={items}/>
      </div>
    )
  }
  else{ signIn(); return <div></div>}
}

export default Home;