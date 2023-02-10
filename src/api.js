import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID iFTFCimCM6BLFyFTewt5P7G6rKoUP0JU-QJEQw1gEkE",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
