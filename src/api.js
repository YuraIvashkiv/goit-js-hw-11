import axios from "axios";
import Notiflix, { Notify } from "notiflix";
const URL = "https://pixabay.com/api/";
const API_KEY ='38205040-049809ebda30fd63b3b5c73fa';

async function getNews(query, page=1) {
  
    try {
        const resp = await axios.get(URL, {
        params: {
            q: query,
            key: API_KEY,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 40,

        }
    });
    return resp.data;
    } catch (error) {
        Notify.failure(error.message);
    }
}


export default { getNews };

