import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ItemSubmit = ({
  formValues,
  imgKeysToDelete,
  imgFilesToAdd,
  files,
  item,
}) => {
  const [status, setStatus] = useState("send");
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <button
      onClick={(e) =>
        onSubmit(
          e,
          formValues,
          status,
          setStatus,
          imgKeysToDelete,
          imgFilesToAdd,
          files,
          item,
          session,
          router,
        )
      }
      className="rounded-md bg-maroon px-8 py-2 text-light shadow-sm transition-colors duration-100 ease-in-out hover:bg-opacity-70"
    >
      {status === "send" && "Update Listing"}
      {status === "sending" && "Updating..."}
      {status === "sent" && "Done"}
    </button>
  );
};

async function onSubmit(
  e,
  formValues,
  status,
  setStatus,
  imgKeysToDelete,
  imgFilesToAdd,
  files,
  item,
  session,
  router,
) {
  e.preventDefault();
  setStatus("sending");
  try {
    // Create array of promises for uploading the added files
    let imagesSuccessfullyDeleted = await deleteImages(imgKeysToDelete);
    let imagesSuccessfullyUploaded = await uploadImages(imgFilesToAdd);

    let finalFiles = files.filter(
      (file) => !imagesSuccessfullyDeleted.includes(file),
    );
    finalFiles = finalFiles.concat(imagesSuccessfullyUploaded);
    var fileNames = finalFiles.join(", ");

    // Check if the upload was successful
    const resp = await fetch("/api/items/update", {
      method: "POST",
      body: JSON.stringify({
        itemId: item.itemId,
        title: formValues.title,
        price: formValues.price,
        description: formValues.Description,
        type: formValues.type,
        preferredMeetup: formValues.meetup,
        tags: JSON.stringify(formValues),
        status: "for_sale",
        dateSold: "",
        profileId: item.profileId,
        imageKeys: `[${fileNames}]`,
      }),
    });
    const data = await resp.json();
    if (data.success === true) {
      setStatus("sent");
      router.push("/");
    } else {
      setStatus("error");
      console.log("ERROR uploading from edit: ", data);
    }
  } catch (error) {
    console.error(error);
    setStatus("error"); // You can set an error status if there's an exception
  }
}

//takes in a list of files and returns a list of image keys that were successfully uploaded
async function uploadImages(imageFiles) {
  var date = new Date();
  var formattedDate = format(date, "yyyy-M-dd-HH-mm-ss");
  let keysSuccessfullyUploaded = [];
  let imageKeys = [];
  let uploadPromises = [];
  try {
    uploadPromises = imageFiles.map(async (file) => {
      var fileKey = `${formattedDate}+${formatString(file.name)}`;
      imageKeys.push(fileKey);
      var fileType = file.type;
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
  } catch (error) {
    console.error("failed to upload images", error);
  }
  const responses = await Promise.all(uploadPromises);
  responses.forEach((response, index) => {
    if (response.status === 200) {
      keysSuccessfullyUploaded.push(imageKeys[index]);
    }
  });
  return keysSuccessfullyUploaded;
}

//takes in a list of image keys and deletes the images from AWS S3, returning a list of image keys that were successfully deleted
async function deleteImages(imageKeys) {
  let keysSuccessfullyDeleted = [];
  let deletionPromises = [];
  try {
    deletionPromises = imageKeys.map((key) => {
      return fetch("/api/deleteImg", {
        method: "DELETE",
        body: JSON.stringify({
          file_key: key.trim(),
          user: session?.user?.email || "no_user_email",
        }),
      }).then((res) => res.json());
    });
  } catch (error) {
    console.error("failed to delete images", error);
  }
  const responses = await Promise.all(deletionPromises);
  responses.forEach((response, index) => {
    if (response.success === true) {
      keysSuccessfullyDeleted.push(imageKeys[index]);
    }
  });
  return keysSuccessfullyDeleted;
}

function formatString(text) {
  var outputText = text.replace(" ", "-").replace("_", "-").toLowerCase();
  return outputText;
}

export default ItemSubmit;
