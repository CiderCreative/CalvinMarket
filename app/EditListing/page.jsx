"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import loadingImg from "../../constants/loadingImage.png";
import { apiLimiter } from "../../utils/rateLimiter";
import { ExitButton } from "../../components/Global";
import { TrashIcon } from "@heroicons/react/24/outline";

const Page = () => {
  const [items, setItems] = useState([]); //your items
  const { data: session, status } = useSession(); // Get the session
  const [urls, setUrls] = useState([loadingImg]);

  useEffect(() => {
    if (status === "loading") return; // If it's loading, don't do anything
    const getItems = () => {
      fetch("/api/items/get", {
        method: "POST",
        body: JSON.stringify({
          filter: `profileId = ${session.user.email}`,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => setItems(data.Items));
    };
    getItems();
  }, [status]);

  useEffect(() => {
    setUrls(items.map((item) => loadingImg));
    const imageKeyList = items.map(
      (item) => item.imageKeys.slice(1, -1).split(",")[0], //takes away quotes and splits the string
    );
    const fetchImageURLs = async () => {
      try {
        const imgPromises = await apiLimiter.getImage(imageKeyList);
        const imageURLs = await Promise.all(imgPromises);
        setUrls(imageURLs);
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
      }
    };

    fetchImageURLs();
  }, [items]);

  return (
    <div className="m-auto max-w-[1500px] px-2 py-10 sm:px-10">
      <ExitButton />
      <div className="my-10 text-center">
        <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
          Your items
        </h1>
        <p className="text-center text-base text-subtle md:text-base">
          Tap on an item to edit
        </p>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-10 xl:grid-cols-5 2xl:grid-cols-6">
        {urls.map((url, index) => {
          if (!items[index] || !items[index].itemId) return null;
          return (
            <div className="flex w-full flex-col" key={index}>
              <div className="group/item relative">
                <div
                  className="group absolute right-0 top-0 hidden bg-primary p-1 group-hover/item:block"
                  onClick={(e) => {
                    onDelete(items[index]);
                  }}
                >
                  <TrashIcon className="size-6 stroke-[1.2px] group-hover:text-red-500" />
                </div>
                <Link
                  href={`/Item/${items[index].itemId || ""}`}
                  className="mb-5 flex w-full flex-shrink-0 flex-col text-xs transition-transform duration-75 ease-in-out hover:cursor-pointer lg:text-sm"
                >
                  <Image
                    src={url}
                    className="aspect-square w-full flex-shrink-0 rounded-md object-cover"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="flex justify-between space-x-2 pt-2 text-subtle">
                    <p className="font-semibold">{items[index].title}</p>
                    <p>
                      {items[index].price > 0
                        ? `$${items[index].price}`
                        : "Free"}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function onDelete(item) {
  fetch("/api/items/delete", {
    method: "DELETE",
    body: JSON.stringify({ item }),
  }).then((res) => res.json());
}

export default Page;
