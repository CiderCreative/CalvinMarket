"use client";
import React, { useState, useEffect } from "react";
import { ItemCarousel, SidebarMenu } from "../../../components/Item/index";
import { ExitButton } from "../../../components/Global/index";

const Page = ({ params: { ItemId } }) => {
  const [item, setItem] = useState([{ imageKeys: "[]" }]);

  useEffect(() => {
    // Get item from DB
    const getItems = async () => {
      const response = await fetch(`/api/items/get`, {
        method: "POST",
        body: JSON.stringify({
          filter: `itemId = ${ItemId.substring(0, ItemId.length - 3)}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => setItem(data.Items));
    };
    getItems();
  }, [ItemId]);

  return (
    <div className="w-screen overflow-x-clip">
      <ExitButton />

      <div className="max-lg:flex-col mt-20">
        {/* Contains carousel & image container (for quick selection) */}
        <div className="h-full flex-grow lg:max-w-[calc(100%-400px)]">
          <ItemCarousel imageKeys={item[0].imageKeys} />
        </div>

        <div className="lg:fixed right-0 inset-y-0 lg:w-1/5 min-w-[400px]">
          <SidebarMenu item={item[0]} />
        </div>
      </div>
    </div>
  );
};

export default Page;
