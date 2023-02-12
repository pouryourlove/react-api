import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID iFTFCimCM6BLFyFTewt5P7G6rKoUP0JU-QJEQw1gEkE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
