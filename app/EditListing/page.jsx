"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import loadingImg from "../../constants/loadingImage.png";
import { apiLimiter } from "../../utils/rateLimiter";

const page = () => {
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
      (item) => item.imageKeys.slice(1, -1).split(",")[0] //takes away quotes and splits the string
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
    <div className="flex flex-row">
      {urls.map((url, index) => {
        if (!items[index] || !items[index].itemId)
          return (
            <Image
              src={url}
              className="object-cover aspect-square w-full flex-shrink-0 rounded-md"
              alt="placeholder image"
              width={200}
              height={200}
            />
          );
        return (
          <div className="flex flex-col w-40">
            <Link
              href={`/Item/${items[index].itemId || ""}`}
              className="w-40 h-40"
            >
              <Image
                src={url}
                className="object-cover aspect-square w-full flex-shrink-0 rounded-md"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <button onClick={() => onDelete(items[index])}>Delete</button>
            <p className="text-md leading-5 pt-1">
              {items[index].price > 0 ? `$${items[index].price}` : "Free"}
            </p>
            <p className="text-md font-bold">{items[index].title}</p>
            <p className="text-xs font-light">{items[index].detail}</p>
          </div>
        );
      })}
    </div>
  );
};

function onDelete(item) {
  fetch("/api/items/delete", {
    method: "DELETE",
    body: JSON.stringify({ item }),
  }).then((res) => res.json());
}

export default page;
