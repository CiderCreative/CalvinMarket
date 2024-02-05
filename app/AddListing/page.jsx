"use client";

import React, { useState } from "react";
import { EditSidebarMenu } from "../../components/EditListing/index.js";
import { FileInput } from "../../components/EditListing/index.js";
import { ExitButton } from "../../components/Global/index.js";
import axios from "axios";
import { format } from "date-fns";

const Page = ({ params: { ItemId } }) => {
  const [files, setFiles] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [status, setStatus] = useState("unsent");
  return (
    <div className="flex max-lg:flex-col items-center">
      <div className="lg:w-1/2">
        <ExitButton />
        <FileInput files={files} setFiles={setFiles} />
      </div>

      <div className="lg:w-1/2">
        <EditSidebarMenu
          formValues={formValues}
          setFormValues={setFormValues}
        />

        {/* Submit button */}
        <button
          onClick={(e) => {
            submit(e, formValues, files, setStatus);
            setStatus("sending");
          }}
          className={` mt-10 w-[200px] py-3 rounded-full text-white transition-colors duration-500 ${
            status === "sending"
              ? "bg-yellow-500"
              : status === "sent"
              ? "bg-neutral-700 cursor-not-allowed"
              : "bg-maroon hover:opacity-80"
          }`}
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "Sent"
            : "Submit"}
        </button>
      </div>
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
    responses.forEach((response) => {
      if (response.status !== 200) {
        imagesProcessed = false;
      }
    });
    // Check if the upload was successful
    if (imagesProcessed) {
      const resp = await fetch("/api/items/put", {
        method: "POST",
        body: JSON.stringify({
          title: formValues.title,
          price: formValues.price,
          description: formValues.Description,
          type: formValues.type,
          preferredMeetup: formValues.meetup,
          tags: JSON.stringify(formValues),
          status: "for_sale",
          dateSold: "",
          imageKeys: `[${fileNames}]`,
        }),
      });
      const data = await resp.json();
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

export default Page;