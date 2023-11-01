import loadingImg from '../constants/loadingImage.png';

export const getImageURL = async (keyNames) => {
  const keyNamesList = typeof keyNames === 'string' ? [keyNames] : keyNames;

  try {
    const imgUrlPromise = keyNamesList.map(async (keyName) => {
      const response = await fetch("/api/imageURL", {
        method: "POST",
        body: JSON.stringify({
          type: "image/*",
          file_key: keyName
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        return loadingImg;
      }
    });

    const responseData = await Promise.all(imgUrlPromise);
    return responseData;
  } catch (error) {
    // Handle any potential errors during the process
    console.error("Failed to fetch image URL", error);
    return [loadingImg];
  }
};
