import Image from "next/image";
import { useRef, useState } from "react";

export default function FileInput({ files, setFiles }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files.length; i++) {
        setFiles((prevState) => [...prevState, e.target.files[i]]);
      }
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function removeFile(idx) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  const XIcon = (
    <svg
      className="w-4 h-4"
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
            text-center aspect-square flex flex-col items-center justify-center py-10
           hover:bg-yellow/50 cursor-pointer my-20 transition-colors duration-200
           border-4 border-dashed border-opposite rounded-xl w-3/5 m-auto border-separate
           ${dragActive ? "bg-[#333333]" : ""}
           `}
        >
          <p className="text-xs sm:text-base lg:text-3xl font-bold">
            Add your <br />
            images here
          </p>
        </div>

        {/* Image Thumbnails & Remove Functionality */}
        <div className="flex items-center justify-center w-4/5 m-auto">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex flex-row justify-end p-2 cursor-pointer group hover:group-hover"
            >
              {file.type.startsWith("image/") ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
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
                className="hidden group-hover:block absolute p-1 bg-red-500 text-white"
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
