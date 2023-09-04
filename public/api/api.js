import axios from "axios";
const BASE_URL = "https://news-api-sgzy.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${BASE_URL}/articles`);
};
