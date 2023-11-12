import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import loadingImg from '../../constants/loadingImage.png'
import {apiLimiter} from '../../utils/rateLimiter'

const ItemHighlight = ({item}) => {
  const {price, title, detail, itemId, imageKeys:imageKeysString} = item
  const [urls, setUrls] = useState([loadingImg]);   //list of urls for images
  let imageKeyList = imageKeysString.slice(1,-1).split(",")
  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imgPromises = await apiLimiter.getImage(imageKeyList)
        const imageURLs = await Promise.all(imgPromises);
        setUrls(imageURLs);
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
      }
    };

    fetchImageURLs();
  }, []);

  return (
    <Link href={`/Item/${itemId}}`} className="flex flex-col hover:scale-[102%] w-[120px] md:w-[150px] xl:w-[200px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:cursor-pointer mr-10 mb-5">
      <Image src={urls[0]}
      className="object-cover aspect-square w-[120px] md:w-[150px] xl:w-[200px] flex-shrink-0"
      alt="" width={200} height={200}/>

      <p className="text-md leading-5 pt-1">{price > 0 ? `$${price}` : "Free"}</p>
      <p className="text-md font-bold">{title}</p>
      <p className="text-xs font-light">{detail}</p>
    </Link>
  )
}




export default ItemHighlight