"use client";
import React, { useState, useEffect, useRef } from "react";
import { ItemCarousel, SidebarMenu } from "../../../components/Item/index";
import { ExitButton } from "../../../components/Global/index";
import { useSession } from "next-auth/react";
import { EditSidebarMenu } from "../../../components/EditListing";
import EditFileInput from "../../../components/EditListing/EditFileInput";
import { ItemSubmit, ItemCancelEdit } from "../../../components/EditListing";

const Page = ({ params: { ItemId } }) => {
  const [item, setItem] = useState({
    imageKeys: "[]",
    tags: JSON.stringify({}),
    description: "",
  });
  const [files, setFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const imgsToDelete = useRef([]);
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
    setFormValues(JSON.parse(item.tags));
    setFiles(item.imageKeys);
  }, [item]);

  return (
    <div className="w-screen overflow-x-clip">
      <ExitButton />

      <div className="mt-20 max-lg:flex-col">
        {/* Contains carousel & image container (for quick selection) */}
        <div className="h-full flex-grow lg:w-1/2">
          {!isEditing ? (
            <ItemCarousel imageKeys={item.imageKeys} />
          ) : (
            <EditFileInput
              files={files}
              setFiles={setFiles}
              imgsToDelete={imgsToDelete.current}
            />
          )}
        </div>

        <div className="inset-y-0 right-0 w-1/2 lg:fixed">
          {!isEditing ? (
            <SidebarMenu item={item} setIsEditing={setIsEditing} />
          ) : (
            <>
              <EditSidebarMenu
                formValues={formValues}
                setFormValues={setFormValues}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />

              <div className="mt-16 flex space-x-5">
                <ItemCancelEdit setIsEditing={setIsEditing} />
                <ItemSubmit
                  formValues={formValues}
                  imgKeysToDelete={imgKeysToDelete}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
