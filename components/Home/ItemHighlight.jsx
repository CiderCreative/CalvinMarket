import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import loadingImg from "../../constants/loadingImage.png";
import { apiLimiter } from "../../utils/rateLimiter";

const ItemHighlight = ({ item }) => {
  const { price, title, detail, itemId, imageKeys: imageKeysString } = item;
  const [urls, setUrls] = useState([loadingImg]); //list of urls for images
  let imageKeyList = imageKeysString.slice(1, -1).split(",");
  useEffect(() => {
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
  }, []);

  return (
    <Link
      href={`/Item/${itemId}`}
      className="mb-5 flex w-full flex-shrink-0 flex-col text-xs transition-transform duration-75 ease-in-out hover:scale-[102%] hover:cursor-pointer lg:text-sm"
    >
      <Image
        src={urls[0]}
        className="aspect-square w-full flex-shrink-0 rounded-md object-cover"
        alt=""
        width={200}
        height={200}
      />

      <div className="flex justify-between space-x-2 pt-2 text-subtle">
        <p>{title}</p>
        <p className="font-semibold">{price > 0 ? `$${price}` : "Free"}</p>
      </div>
    </Link>
  );
};

export default ItemHighlight;
