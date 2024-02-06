//the main difference between this and FileInput is that this uses AWS
//files in this file represent itemKeys

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { apiLimiter } from "../../utils/rateLimiter";
import { ItemSubmit, ItemCancelEdit } from "../../components/EditListing";

export default function FileInput({
  files,
  setFiles,
  imgsToDelete,
  imgsToAdd,
}) {
  const [dragActive, setDragActive] = useState(false);
  const [urls, setUrls] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imgPromises = await apiLimiter.getImage(
          files.slice(1, -1).split(","),
        );
        const imageURLs = await Promise.all(imgPromises);
        setUrls(imageURLs);
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
      }
    };
    console.log("FILES", files);
    if (files[0] !== "") {
      fetchImageURLs();
    }
  }, [files]);

  function handleChange(e) {
    e.preventDefault();
    if (e.target.urls && e.target.urls[0]) {
      for (let i = 0; i < e.target.urls.length; i++) {
        setUrls((prevState) => [...prevState, e.target.urls[i]]);
      }
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.urls && e.dataTransfer.urls[0]) {
      for (let i = 0; i < e.dataTransfer.urls.length; i++) {
        setUrls((prevState) => [...prevState, e.dataTransfer.urls[i]]);
      }
    }
  }

  const removeFile = (idx) => {
    const newArr = [...urls];
    const newFiles = [...files];
    imgsToDelete.append(files[idx]);
    files.splice(idx, 1);
    newArr.splice(idx, 1);
    setUrls(newArr);
    setFiles(newFiles);
  };

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  const XIcon = (
    <svg
      className="h-4 w-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );

  return (
    <div className="">
      {/* <div className="flex items-center justify-center hover:cursor-pointer hover:bg-[#555555] active:bg-[#333333] transition-colors duration-300 w-4/5 m-auto my-20"> */}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* hidden file input */}
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          accept="image/*"
        />

        {/* Prompt box */}
        <div
          onClick={openFileExplorer}
          onDrop={handleDrop}
          onDragEnter={(e) => {
            handle(e);
            setDragActive(true);
          }}
          onDragLeave={(e) => {
            handle(e);
            setDragActive(false);
          }}
          onDragOver={(e) => {
            handle(e);
            setDragActive(true);
          }}
          className={`
            m-auto my-20 flex aspect-square w-3/5 border-separate cursor-pointer
           flex-col items-center justify-center rounded-xl border-4
           border-dashed border-opposite py-10 text-center transition-colors duration-200 hover:bg-yellow/50
           ${dragActive ? "bg-[#333333]" : ""}
           `}
        >
          <p className="text-xs font-bold sm:text-base lg:text-3xl">
            Add your <br />
            images here
          </p>
        </div>

        {/* Image Thumbnails & Remove Functionality */}
        <div className="m-auto flex w-4/5 items-center justify-center">
          {urls.map((url, idx) => (
            <div
              key={idx}
              className="hover:group-hover group flex cursor-pointer flex-row justify-end p-2"
            >
              {url ? (
                <Image
                  src={url}
                  alt={url}
                  className="aspect-square w-28 object-cover"
                  width={500}
                  height={500}
                />
              ) : (
                <span>PDF Thumbnail</span>
              )}
              {/* Delete Icon (X Out) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
                className="absolute hidden bg-red-500 p-1 text-white group-hover:block"
              >
                {XIcon}
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

function handle(e) {
  e.preventDefault();
  e.stopPropagation();
}
