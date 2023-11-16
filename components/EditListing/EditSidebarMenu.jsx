import React, { useState } from 'react';
import {apparelType} from './ItemTypes/apparel.jsx';
import FileInput from './FileInput';
import axios from "axios";
import { format } from "date-fns";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const EditSidebarMenu = () => {
  // State to manage form values
  const [formValues, setFormValues] = useState({});
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("unsent");
  const [ dropdown, setDropdown ] = useState([])

  return (
    <div className="flex flex-col fixed right-0 inset-y-0 w-1/2 px-5 border-l-2 p-10 overflow-y-scroll">

      <div className="flex items-center text-3xl font-bold space-x-5 w-full">
        {/* Title */}
        <input
          type="text"
          placeholder='Item Title'
          onChange={(e) => setFormValues({...formValues, title: e.target.value})}
          className="w-3/5 px-5 py-3 input-clear rounded-xl"
        />

        {/* Price */}
        <div className="relative flex items-center w-2/5">
          <span className="absolute left-4 opacity-50">$</span>
          <input
            type="number"
            placeholder="0"
            value={formValues.price}
            onChange={(e) => setFormValues({...formValues, price: e.target.value})}
            className="text-center w-full px-5 py-3 rounded-xl input-clear"
          />
        </div>
      </div>

      <hr className='bg-opposite/5 w-11/12 m-auto h-[2px] my-8' />

      {/* mapping specific tag questions for each item */}
      {Object.keys(apparelType).map((key, index) => {
        let value = apparelType[key];

        { // ------------- Radio Button Tags ------------- //
        if (value.type === "button") {
          return(
          <div className='flex space-x-10 my-5' key={index}>
            {/* Tag title */}
            <p className="text-lg">{key}</p>

            <div className="flex space-x-5">{value.options.map((option, index) => (
              <div key={index}
                className="flex flex-col items-center"
                onClick={() => setFormValues({ ...formValues, [key]: option })}
              >
                {/* Button */}
                <div className={`aspect-square rounded-full w-5 cursor-pointer border-[1px] border-opposite relative ${formValues[key] === option ? 'bg-yellow' : ''}`}>
                  {/* Center dot*/}
                  {formValues[key] === option && ( <div className="absolute inset-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2" />)}
                </div>

                {/* Description of option */}
                <label htmlFor={`${key}-option-${index}`} className="text-md cursor-pointer">{option}</label>
              </div>
            ))}

            </div>
          </div>
        )}

        // ------------- Drop Down Tags ------------- //
        else if (value.type === "drop-down")  {
          return (
          <div className="my-5">
            <div className="flex items-center space-x-10">
              <label className="text-lg">{key}</label>
              <div
                onClick={() => (dropdown === index ? setDropdown(null) : setDropdown(index))}
                className="border-[1px] hover:bg-opposite/10 cursor-pointer border-opposite/30 rounded-xl px-5 py-2 flex justify-between items-center w-1/4"
              >
                {formValues[key] || 'Select an option'}
                <ChevronDownIcon className="inset-y-0 right-0 pointer-events-none aspect-square w-6" />
              </div>
            </div>

            <div>
              {dropdown === index && value.options.map((option, index) => (
                <div key={index}
                  value={option}
                  className="hover:bg-yellow cursor-pointer"
                  onClick={() => setFormValues({ ...formValues, [key]: option })}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          )}

        // ------------- Text Input Tags ------------- //
        else if (value.type === "text"){
          return (
          <div>
            <div>{key}</div>
            <input
              type="text"
              placeholder={value.filler}
              onChange={(e) => setFormValues({...formValues, [key]: e.target.value})}
            />
          </div>)
          } }

        })}


      <FileInput files={files} setFiles={setFiles} />

      <div>
        <h3>Preferred Meetup</h3>
        <input
          type="text"
          onChange={(e) => setFormValues({...formValues, preferredMeetup: e.target.value})}
          />
      </div>

      {/* Submit button */}
      <button onClick={(e)=> {submit(e, formValues, files, setStatus);
        setStatus("sending")}}
        className={`${status === "unsent" ? "bg-slate-500" : status==="sending" ? " bg-yellow" : status==="sent" ? "bg-green-500" : "bg-red-500"}}`}>
        Submit
      </button>

    </div>
  );
};


async function submit(e, formValues, files, setStatus) {
  e.preventDefault();
  var date = new Date();
  var formattedDate = format(date, "yyyy-M-dd-HH-mm-ss");
  var fileNames = "";

  try {
    // Create an array of promises for the file uploads
    const uploadPromises = files.map(async (file) => {
      var fileKey = `${formattedDate}+${formatString(file.name)}`;
      var fileType = file.type;
      fileNames = fileNames === "" ? fileKey : `${fileNames}, ${fileKey}`;

      let { data } = await axios.post("/api/postImgUrl", {
        file_key: fileKey,
        type: fileType,
      });

      const uploadUrl = await data.url;

      const response = await axios.put(uploadUrl, file, {
        headers: {
          "Content-type": fileType,
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    });
    const responses = await Promise.all(uploadPromises);
    var imagesProcessed = true;
    responses.forEach(response => {
      if (response.status !== 200) {
        imagesProcessed = false;
      }
    });
    // Check if the upload was successful
    if (imagesProcessed) {
      const resp = await fetch('/api/items/put', {
        method: 'POST',
        body: JSON.stringify({
          ...formValues,
          status: 'for_sale',
          dateSold: '',
          imageKeys: `[${fileNames}]`,
          sellerId: '123',
        }),
      });
      const data = await resp.json();
      console.log(data);
    } else {
      throw new Error("Unable to upload images");
    }


    // Once all uploads are done, set the status
    setStatus("sent");

  } catch (error) {
    console.log(error);
    setStatus("error"); // You can set an error status if there's an exception
  }
}

function formatString(text) {
  var outputText = text.replace(" ", "-").replace("_", "-").toLowerCase();
  return outputText;
}


export default EditSidebarMenu;

