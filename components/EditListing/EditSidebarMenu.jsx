import React, { useState } from 'react';
import {apparelType} from './ItemTypes/apparel.jsx';
import FileInput from './FileInput';
import axios from "axios";
import { format } from "date-fns";

const EditSidebarMenu = () => {
  // State to manage form values
  const [formValues, setFormValues] = useState({});
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("unsent");


  return (
    <div className="flex flex-col fixed right-0 inset-y-0 w-[400px] bg-light px-5">
      <div>
        <h3>Title</h3>
        <input
          type="text"
          onChange={(e) => setFormValues({...formValues, title: e.target.value})}
        />
      </div>

      <div>
        <h3>Price</h3>
        <input
          type="number"
          onChange={(e) => setFormValues({...formValues, price: e.target.value})}
        />
      </div>

      <div>
        <h3>Preferred Meetup</h3>
        <input
          type="text"
          onChange={(e) => setFormValues({...formValues, preferredMeetup: e.target.value})}
        />
      </div>

      {/* maping specific tag questions for each item */}
      {Object.keys(apparelType).map((key, index) => {
        let value = apparelType[key];
        return (
          <div key={index}>
            {value.type === "button" ? (
              <div>
                <div className="text-xl">{key}</div>
                {value.options.map((option, index) => (

                  <button key={index}
                  onClick={()=>(setFormValues({...formValues, [key]: option}))}
                  className={`${formValues[key]===option && 'text-red-500'}`}>
                    {option}
                  </button>

                ))}
              </div>


            ) : value.type === "drop-down" ? (
              <div>
                <div>{key}</div>
                <select onChange={(e) => setFormValues({...formValues, [key]: e.target.value})}>
                  {value.options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
            ) : value.type === "text" ? (
              <div>
                <div>{key}</div>
                <input
                  type="text"
                  placeholder={value.filler}
                  onChange={(e) => setFormValues({...formValues, [key]: e.target.value})}
                />
              </div>
            ) : null}
          </div>
        );
      })}
      {/* Submit button */}

      <FileInput files={files} setFiles={setFiles} />

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

