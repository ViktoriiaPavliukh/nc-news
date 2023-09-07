import axios from "axios";
const BASE_URL = "https://news-api-sgzy.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${BASE_URL}/articles`);
};

export const getArticleById = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then((response) => { 
      return response.data.article;
    })
    .catch((error) => {
      throw new Error("Failed to fetch article: " + error.message);
    });
};

export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then((response) => {
      console.log("API Response:", response.data.comments);
      return response.data.comments;
    })
    .catch((error) => {
      throw new Error("Failed to fetch article: " + error.message);
    });
};

export const updateVotesByArticleId = (article_id, updatedVote) => {
  return axios
    .patch(`${BASE_URL}/articles/${article_id}`, { votes: updatedVote })
    .then((response) => {
      console.log("API Response:", response.data.article);
      return response.data.article;
    })
    .catch((error) => {
      throw new Error("Failed to update votes: " + error.message);
    });
};

