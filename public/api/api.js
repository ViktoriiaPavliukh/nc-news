import axios from "axios";
const BASE_URL = "https://news-api-sgzy.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${BASE_URL}/articles`);
};

export const getArticleById = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then((response) => {
      console.log("API Response:", response.data.article); 
      return response.data.article;
    })
    .catch((error) => {
      throw new Error("Failed to fetch article: " + error.message);
    });
};
