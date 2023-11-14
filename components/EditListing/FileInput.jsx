import { useRef, useState } from "react";

export default function FileInput({files, setFiles}) {
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

  function removeFile(idx){
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  const XIcon = <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg>

  return (
    <div className="flex items-center justify-center hover:cursor-pointer hover:bg-[#555555] active:bg-[#333333] transition-colors duration-300 my-3">
      <form
        className={`${
          dragActive ? "bg-[#333333]" : ""
        }  p-4 w-full text-center flex flex-col items-center justify-center border-2 py-10`}
        onDragEnter={(e)=> {handle(e); setDragActive(true);}}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={(e)=> {handle(e); setDragActive(false);}}
        onDragOver={(e)=> {handle(e); setDragActive(true);}}
        onClick={openFileExplorer}
      >

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

        <p className={`text-xs sm:text-sm lg:text-md ${files.length > 0 ? "my-4" : ""}`}>Drag & drop images here or click to select files</p>

        {/* img thumbnail + remove */}
        <div className="flex flex-row items-center">
          {files.map((file, idx) => (
            <div key={idx} className="flex flex-row space-x-5 justify-end pr-5">
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="aspect-square w-28 object-cover"
                />
              ) : (
                <span>PDF Thumbnail</span>
              )}
              <button
                className="text-red-500 hover:text-white cursor-pointer absolute items-end justify-end p-1 hover:bg-red-500 rounded-xl transition-all duration-200"
                onClick={(e) => {e.stopPropagation(); removeFile(idx);}}
              >
                {/* Delete Icon (X Out) */}
                {XIcon}
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

function handle(e) { e.preventDefault(); e.stopPropagation(); }