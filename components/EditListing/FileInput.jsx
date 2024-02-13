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
    <div>
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
           m-auto my-20 flex aspect-square w-[50vw] max-w-[400px] border-separate cursor-pointer flex-col
           items-center justify-center rounded-xl border-2 border-dashed border-dark/50
           py-10 text-center transition-colors duration-75 hover:bg-yellow/50 dark:border-light/50 lg:w-3/5
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
          {files.map((file, idx) => (
            <div
              key={idx}
              className="hover:group-hover group flex cursor-pointer flex-row justify-end p-2"
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
