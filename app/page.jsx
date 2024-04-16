"use client";

import {
  AccountIndication,
  HighlightContainer,
  Searchbar,
  Settings,
  HomeSidebar,
  HomeTopbar,
  MessageButton,
} from "../components/Home/index";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

function Home() {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [items, setItems] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const getItems = () => {
      fetch("/api/items/get", {
        method: "POST",
        body: JSON.stringify({
          filter: "type = textbook",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => setItems(data.Items));
    };

    getItems();
  }, []);
  if (session?.user?.email) {
    return (
      <div
        className={`flex flex-col items-center overflow-x-hidden transition-all duration-100 ${
          sidebarClosed ? "lg:pl-[50px]" : "lg:pl-[300px]"
        }`}
      >
        {/* Top Bar */}
        <div className="mt-5 flex w-full items-center justify-between space-x-3 px-3 lg:px-10">
          <Searchbar />
          <div className="flex space-x-5">
            <AccountIndication userName={session?.user?.email.split("@")[0]} />
            <MessageButton />
            <Settings />
          </div>
        </div>

        {/* Sidebar - Large Screens */}
        <HomeSidebar
          sidebarClosed={sidebarClosed}
          setSidebarClosed={setSidebarClosed}
        />

        {/* Mobile top bar */}
        <HomeTopbar />

        {/* Featured Item Categories */}
        <HighlightContainer text="Newly Added" data={items.slice(0, 5)} />
        <HighlightContainer text="Textbooks" data={items.slice(0, 5)} />
        <HighlightContainer text="Free Items" data={items.slice(0, 5)} />
      </div>
    );
  } else if (status === "loading") {
    return <div />;
  } else {
    signIn();
    return <div />;
  }
}

export default Home;
