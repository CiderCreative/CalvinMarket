import React, { useState } from "react";

const ItemSubmit = ({ formValues, imgKeysToDelete }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <button
      onClick={(e) => {}}
      className="rounded-md bg-maroon px-8 py-2 text-light shadow-sm transition-colors duration-100 ease-in-out hover:bg-opacity-70"
    >
      Submit
    </button>
  );
};

function deleteFile(imgKeysToDelete) {
  imgKeysToDelete.forEach((key) => {
    fetch("/api/deleteImg", {
      method: "DELETE",
      body: JSON.stringify({
        file_key: key,
      }),
    });
  });
}

async function onSubmit(e, formValues, files, setStatus, imgKeysToDelete) {
  e.preventDefault();
  var date = new Date();
  var formattedDate = format(date, "yyyy-M-dd-HH-mm-ss");
  var fileNames = "";

  try {
    // Create an array of promises for the file uploads
    let uploadPromises = imgKeysToDelete.map((key) => {
      fetch("/api/deleteImg", {
        method: "DELETE",
        body: JSON.stringify({
          file_key: key,
        }),
      });
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

export default ItemSubmit;
