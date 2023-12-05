"use client";

import {
  AccountIndication,
  HighlightContainer,
  Searchbar,
  Settings,
  HomeSidebar,
  HomeTopbar,
} from "../components/Home/index";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

function Home({ user }) {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [items, setItems] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const getItems = () => {
      fetch("/api/items/get", {
        method: "POST",
        body: JSON.stringify({
          filter: "status = for_sale",
        }),
      })
        .then((res) => res.json())
        .then((data) => setItems(data.Items));
    };

    getItems();
  }, []);

  if (session?.user?.email) {
    return (
      <div
        className={`transition-all duration-100 overflow-x-hidden flex flex-col items-center ${
          sidebarClosed ? "lg:pl-[50px]" : "lg:pl-[300px]"
        }`}
      >
        {/* Top Bar */}
        <div className="flex w-full items-center justify-between px-3 lg:px-10 mt-5">
          <Searchbar />
          <div className="flex space-x-5">
            <AccountIndication userName={session.user.email.split("@")[0]} />
            <Settings />
          </div>
        </div>

        {/* Sidebar - Large Screens */}
        <HomeSidebar
          sidebarClosed={sidebarClosed}
          setSidebarClosed={setSidebarClosed}
        />

        <HomeTopbar />

        {/* Featured Item Categories */}
        <HighlightContainer text="Newly Added" data={items} />
        <HighlightContainer text="Textbooks" data={items} />
        <HighlightContainer text="Free Items" data={items} />
      </div>
    );
  } else {
    signIn();
    return <div />;
  }
}

export default Home;
