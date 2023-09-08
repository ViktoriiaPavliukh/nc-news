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

export const getArticlesByTopic = (topicSlug) => {
  return axios
    .get(`${BASE_URL}/articles?topic=${topicSlug}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error("Failed to fetch article by topic: " + error.message);
    });
};

export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      throw new Error("Failed to fetch article: " + error.message);
    });
};

export const postCommentByArticleId = (article_id, username, body) => {
  return axios
    .post(`${BASE_URL}/articles/${article_id}/comments`, username, body)
    .then((response) => {
      return response.data.comment;
    })
    .catch((error) => {
      throw new Error("Failed to post article: " + error.message);
    });
};

export const updateVotesByArticleId = (article_id, updatedVote) => {
  return axios
    .patch(`${BASE_URL}/articles/${article_id}`, { votes: updatedVote })
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      throw new Error("Failed to update votes: " + error.message);
    });
};

export const getTopics = () => {
  return axios.get(`${BASE_URL}/topics`);
};

