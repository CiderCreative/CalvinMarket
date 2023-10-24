import loadingImg from '@/constants/loadingImage.png'

export const getImageURL = async (keyName) => {

    const response = await fetch("/api/imageURL", {
      method: "POST",
      body: JSON.stringify(
        {
          type: "image/png",
          file_key: keyName
        })
      })
  
    if (response.ok) {
      const responseData = await response.json();
      return responseData.url;
    } else {
      // Handle the error if the response is not OK
      console.error("Failed to fetch image URL");
      return [loadingImg]; 
    }
  }