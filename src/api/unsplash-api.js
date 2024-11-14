import axios from "axios";

const API_ACCES = "htchTnJn-UrYrD3DL6FsdnPEaTDWCnTIL8zZzxQY8OA";

axios.defaults.baseURL = "https://api.unsplash.com";

// Функція для отримання фотографій за темою
export const fetchImagesWithTopic = async (topic, page) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: topic,
        client_id: API_ACCES,
        page: page, // Параметр пагінації
        per_page: 12, // Кількість зображень на сторінку
      },

      // headers: {
      //   Authorization: Client-ID API_ACCES
      // }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};
