"use client";
import React, { useState, useEffect } from "react";
import { ItemCarousel, SidebarMenu } from "../../../components/Item/index";
import { ExitButton } from "../../../components/Global/index";
import { useSession } from "next-auth/react";
import { EditSidebarMenu } from "../../../components/EditListing";

const Page = ({ params: { ItemId } }) => {
  const [item, setItem] = useState({
    imageKeys: "[]",
    tags: JSON.stringify({}),
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({});
  const { data: session, status } = useSession();
  useEffect(() => {
    // Get item from DB
    const getItem = async () => {
      try {
        const response = await fetch(`/api/items/get`, {
          method: "POST",
          body: JSON.stringify({
            filter: `itemId = ${ItemId.substring(0, ItemId.length)}`,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setItem(data.Items[0]);
          });
      } catch (error) {
        console.error("Failed to fetch item");
      }
    };
    getItem();
  }, [ItemId]);

  useEffect(() => {
    setFormValues(item.tags);
  }, [item]);

  return (
    <div className="w-screen overflow-x-clip">
      <ExitButton />
      {/* edit button */}
      {session?.user?.email === item.profileId && (
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-maroon text-white w-[200px] py-3 rounded-full "
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      )}
      <div className="max-lg:flex-col mt-20">
        {/* Contains carousel & image container (for quick selection) */}
        <div className="h-full flex-grow lg:w-1/2">
          <ItemCarousel imageKeys={item.imageKeys} />
        </div>

        <div className="lg:fixed right-0 inset-y-0 w-1/2">
          {!isEditing ? (
            <SidebarMenu item={item} />
          ) : (
            <EditSidebarMenu
              formValues={JSON.parse(`${formValues}`)}
              setFormValues={setFormValues}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
